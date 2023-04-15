import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Interface from './pages/Interface'
import Profile from './pages/Profile'
import Editor from './pages/Editor'

import Aside from './components/Navigation/Aside'
import Navigation from './components/Navigation/Navigation'

import './App.css'

function App() {

  let [friends, setFriends] = useState([])
  let [filterData, setFilterData] = useState({})
  const [page, setPage] = useState('Dashboard')
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const readData = async () => {
      const data = await fetch(`${import.meta.env.VITE_BACKEND}/`)
      const filter = await fetch(`${import.meta.env.VITE_BACKEND}/filter`)
      friends = setFriends(await data.json())
      filterData = setFilterData(await filter.json())
      console.log('rdy');
      loading = setLoading(false)
    }
    readData()
    console.log(friends, 'asdasd');
  }, [])


  console.log(filterData, 'asdsadasdasd');

  return (<div className="App">
    <BrowserRouter>
      <Navigation page={page} setPage={page} />
      <Aside filterData={filterData} page={page} setPage={setPage} loading={loading} setLoading={setLoading} />
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
