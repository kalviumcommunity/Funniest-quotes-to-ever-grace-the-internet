import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About'
import UglyShoeList from './ASAPentity';
import DBdata from './DBdata';
import AddShoe from './AddShoe';
const AllRoutes = () => {
  return (
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/uglyshoes' element={<UglyShoeList/>}/>
      <Route path='/DBdata' element={<DBdata/>}/>
      <Route path='/form' element={<AddShoe/>}/>
      </Routes>
  )
}

export default AllRoutes