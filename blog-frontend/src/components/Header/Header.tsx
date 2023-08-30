import { useState, useEffect } from "react"
import axios from "axios";

export const Header = () => {
  const [users, setUsers] = useState([]);
  async function idk() {
    try {
      const response = await axios.get("http://localhost:3000/teste")
      setUsers(response.data.usersList)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    idk()
  }, [])

  return (
    <header className="grid grid-rows-1">
      <h1 className="text-red-400">Blog</h1>
      {users.map(user => <h4 key={user}>{user}</h4>)}
    </header>
  )
}