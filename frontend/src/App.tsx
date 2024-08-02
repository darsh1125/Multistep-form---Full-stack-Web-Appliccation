// access token glpat-2jYMXpgsCc1x_WLLe6J-
import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { ApplicationForm } from './components/ApplicationForm';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { NavBarComponents } from './components/NavBarComponents';
import { SuccessForm } from './components/SuccessForm';
import { Users } from './components/pages/Users';
import { ViewUserDetail } from './components/pages/ViewUserDetail';
import { UpdateSuccess } from './components/UpdateSuccess';


function App() {

  return (
    <div>
      
      <div className='mt-5'>
        <nav className='flex gap-6 text-white p-2 justify-end mr-36'>
          <Link to='/' className='bg-slate-400 p-2 rounded-md'>Get All Users</Link>
          <Link to='/users' className='bg-slate-400 p-2 rounded-md'>Add New Candidate</Link>
        </nav>
      </div>

      <Routes>  
        <Route>
          <Route path='/users' element={<ApplicationForm />} />
          <Route path='/success' element={<SuccessForm />} />
          <Route path='/updateSuccess' element={<UpdateSuccess />} />
          <Route path='/' element={<Users />} />
          <Route path='/users/:id' element={<ApplicationForm />} />
          <Route path='/userDetails/:id' element={<ViewUserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

