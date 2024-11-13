import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';

import Role from './Pages/Role'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Role/>}/>
   

    </Routes>
    </BrowserRouter>
  )
}

export default App
