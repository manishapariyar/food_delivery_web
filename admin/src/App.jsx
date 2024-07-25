import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/siderbar/Sidebar.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
