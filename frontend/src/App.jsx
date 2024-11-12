import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';

import Role from './Pages/Role'
import RoleList from './Pages/RoleList'
import ErrorPage from './Pages/ErrorPage'
import RoleUpdate from './Pages/RoleUpdate';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Role/>}/>
    <Route path='/rolelist' element={<RoleList/>}/>
    <Route path='/roleupdate/:id' element={<RoleUpdate/>}/>
    <Route path='*' element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
