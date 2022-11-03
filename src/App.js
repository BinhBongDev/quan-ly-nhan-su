
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Staffs from './pages/Staffs'
import Department from './pages/Department'
import Salary from './pages/Salary'

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className='full-layout'>
      <div className='top-block'>
        <Header />
      </div>
    <div className="App center-block">
      <Routes>
        <Route path='/' element={ <Staffs />} />
        <Route path='/dept' element={<Department />} />
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
