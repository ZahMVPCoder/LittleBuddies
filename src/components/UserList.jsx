import { useQuery } from '@tanstack/react-query'

// Function to fetch users from API
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function UserList() {
  // useQuery hook for fetching data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) {
    return <div>Loading users...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList