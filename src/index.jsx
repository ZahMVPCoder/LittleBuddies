import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../LittleBuddies/src/App";
import "./index.css";
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// This finds the <div id="root"> in index.html and renders <App />
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)