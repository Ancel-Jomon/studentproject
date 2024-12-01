import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { mainpageDTO, studentDTO } from './pages/students.model';
import Students from './pages/students';
import StudentsList from './pages/studentsslist';
import Button from './utilities/button';
import Menu from './pages/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepartmentIndex from './department/department';
import React from 'react';
import Mainpage from './pages/Mainpage';
import routes from './route-config';
function App() {

  return (

    <BrowserRouter>

      <Menu />
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Items List</h4>
            <Button classname='btn btn-secondary'>Click</Button>
          </div>

        </div>

        <Routes>
          {routes.map((route)=>(<Route path={route.path} Component={route.component} ></Route>))}
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
