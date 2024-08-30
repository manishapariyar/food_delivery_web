import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/siderbar/Sidebar.jsx'
import Add from './pages/Add/Add.jsx'
import Order from './pages/Orders/Order.jsx'
import List  from './pages/List/List.jsx'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
   
          <Routes>
            <Route  path="/add" element ={<Add/>}/>
            <Route  path="/list" element ={<List/>}/>
            <Route  path="/order" element ={<Order/>}/>
          </Routes>
        
      </div>
    </div>
  )
}

export default App
