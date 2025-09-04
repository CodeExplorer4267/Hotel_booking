import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import Home from './component/Home/Home'
const App = () => {
  
  const isOwnerPath=useLocation().pathname.includes('owner')

  return (
    <div>
      {
        !isOwnerPath && <Navbar/>
      }
      <Home/>
    </div> 
  )
}

export default App
