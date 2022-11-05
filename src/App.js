import { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { fetchStaffs } from './pages/Staffs/staffsSlice';
import { fetchStaffsSelector } from './redux/selector';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Staffs from './pages/Staffs'
import Staff from './pages/Staffs/Staff';
import Department from './pages/Department'
import DeptId from './pages/Department/DeptId';
import Salary from './pages/Salary'

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const dispatch = useDispatch()
    const staffsRedux = useSelector(fetchStaffsSelector)

    const {isLoading, staffs, errMess} = staffsRedux
    useEffect(() => {
        dispatch(fetchStaffs())
        // eslint-disable-next-line
    }, [])

  return (
    
    <BrowserRouter>
      <div className='full-layout'>
        <div className='top-block'>
          <Header />
        </div>
      <div className="App center-block">
        <Routes>
          <Route path='/' element={ <Staffs 
          isLoading={isLoading}
          staffs = {staffs} errMess = {errMess}
          />} />
          <Route path='/staffs/:id' element={<Staff />} />
          <Route exact path='/dept' element={<Department />} />
          <Route path='/dept/:deptId' element={<DeptId />} />
          <Route path='/salary' element={ <Salary />} />

          <Route path='*' element = {<NotFound />} />
        </Routes>
      </div>
      <div className='bottom-block'>
        <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
