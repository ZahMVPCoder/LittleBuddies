const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173/';
export const sendMessageToBuddy = async (messages, character) => {
  try {
    const formattedMessages = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text || msg.content
    }));

    const response = await fetch(`${API_BASE_URL}/api/chat/buddy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: formattedMessages,
        character: character,
        model: 'gpt-3.5-turbo',
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      reply: data.reply || data.message || "Let's get moving and stay healthy!"
    };
  } catch (error) {
    console.error('Chat service error:', error);
    // Fitness-themed fallback responses
    const fallbackResponses = [
      "Ready for today's workout? Let's make it count!",
      "Remember, every step counts toward your health goals!",
      "You're doing great! Keep up the momentum!",
      "Want to try some jumping jacks to get energized?",
      "Stay hydrated and keep moving!"
    ];
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    return {
      reply: randomResponse + " (Demo response - full chat coming soon!)"
    };
  }
};
// Alternative implementation using OpenAI directly (client-side)
export const sendMessageWithOpenAI = async (messages, character) => {
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const characterPrompts = {
    penguin: "You are a cool, energetic penguin fitness coach. You love ice-based workouts and staying active. Keep your responses playful and encouraging.",
    duck: "You are a graceful duck fitness coach who specializes in swimming and water exercises. You're calm and methodical in your approach.",
    chicken: "You are an enthusiastic chicken fitness coach who loves high-energy workouts. You're motivating and always ready to get moving!"
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `${characterPrompts[character] || characterPrompts['penguin']} You are a health and fitness coach focused on providing exercise advice, workout tips, and motivation. Keep responses under 100 words and focus on actionable fitness advice. When suggesting exercises, prioritize safety and beginner-friendly options. Include emoji when appropriate. Always maintain your character's personality while giving advice.`
          },
          ...messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const data = await response.json();
    return { 
      reply: data.choices?.[0]?.message?.content?.trim() || "Let's get moving! What kind of exercise interests you?" 
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Unable to get response from your fitness buddy');
  }
};