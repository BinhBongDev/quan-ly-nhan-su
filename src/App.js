import { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { fetchStaffs } from './pages/Staffs/staffsSlice';
import { fetchDepts } from './pages/Department/deptSlice';
import { fetchSalary } from './pages/Salary/salarySlice';
import { fetchStaffsSelector, fetchDeptsSelector, fetchSalarySelector } from './redux/selector';
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
  // staffs
    const staffsRedux = useSelector(fetchStaffsSelector)
    const {isLoading, staffs, errMess} = staffsRedux

    // depts
    const deptsRedux = useSelector(fetchDeptsSelector)

    // salary
    const salaryRedux = useSelector(fetchSalarySelector)

    useEffect(() => {
        dispatch(fetchStaffs())
        dispatch(fetchDepts())
        dispatch(fetchSalary())
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
          <Route exact path='/departments' element={<Department
          isLoading = {deptsRedux.isLoading}
          errMess = {deptsRedux.errMess}
          depts = {deptsRedux.depts}
          />} />
          <Route exact path='/departments/:deptId' element={<DeptId />} />
          <Route path='/salary' element={ <Salary
          isLoading = {salaryRedux.isLoading}
          errMess = {salaryRedux.errMess}
          salary = {salaryRedux.salary}
          
          />} />

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
