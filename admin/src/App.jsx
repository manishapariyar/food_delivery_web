import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/siderbar/Sidebar.jsx'
import Add from './pages/Add/Add.jsx'
import Order from './pages/Orders/Order.jsx'
import List from './pages/List/List.jsx'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:8000"
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
