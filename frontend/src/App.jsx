import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Interface from './pages/Interface'
import Profile from './pages/Profile'
import Editor from './pages/Editor'

import Aside from './components/Navigation/Aside'
import Navigation from './components/Navigation/Navigation'

import './App.css'

function App() {

  const [friends, setFriends] = useState([])
  const [filterData, setFilterData] = useState({})
  const [page, setPage] = useState('Dashboard')

  useEffect(() => {
    const readData = async () => {
      const data = await fetch(`${import.meta.env.VITE_BACKEND}/`)
      const filter = await fetch(`${import.meta.env.VITE_BACKEND}/filter`)
      setFriends(await data.json())
      setFilterData(await filter.json())
    }
    readData()
  }, [])

  console.log(filterData, 'asdsadasdasd');

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation page={page} setPage={page} />
        <Aside filterData={filterData} page={page} setPage={setPage} />
        <main>
          <Routes>
            <Route path='/' element={<Interface friends={friends} />}></Route>
            <Route path='/profile/:id' element={<Profile />}></Route>
            <Route path='/editor' element={<Editor friends={friends} setFriends={setFriends} />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
