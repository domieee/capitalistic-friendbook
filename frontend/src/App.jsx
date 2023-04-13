import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Interface from './pages/Interface'
import Profile from './pages/Profile'
import Editor from './pages/Editor'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Interface />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/editor' element={<Editor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
