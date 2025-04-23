import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About'
import UglyShoeList from './ASAPentity';
import Home from './Home';
const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/uglyshoes' element={<UglyShoeList/>}/>

      </Routes>
  )
}

export default AllRoutes