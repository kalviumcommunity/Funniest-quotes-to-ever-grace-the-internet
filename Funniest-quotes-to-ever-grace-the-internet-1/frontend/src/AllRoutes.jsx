import React, { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './Homepage'
import About from './About'
import AddAnimalSchool from './components/AddAnimalSchool'
import Login from './components/Login'
import Signup from './components/Signup'

const AllRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  // Optional: keep localStorage in sync if state changes
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    if (userId) localStorage.setItem("userId", userId);
  }, [token, userId]);

  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage token={token} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/addSchool' element={<AddAnimalSchool token={token} />} />
            <Route path='/login' element={<Login setToken={setToken} setUserId={setUserId} />} />
            <Route path='/signup' element={<Signup setToken={setToken} setUserId={setUserId} />} />
        </Routes>
    </div>
  )
}

export default AllRoutes