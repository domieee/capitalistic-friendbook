import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    const readData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/`)
      const json = await res.json()
      setFriends(json)
    }
    readData()
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App
