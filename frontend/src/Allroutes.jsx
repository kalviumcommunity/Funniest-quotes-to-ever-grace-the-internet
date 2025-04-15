import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About'
import UglyShoeList from './ASAPentity';
const AllRoutes = () => {
  return (
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/uglyshoes' element={<UglyShoeList/>}/>

      </Routes>
  )
}

export default AllRoutes