import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupUser from './components/SignupUser';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/signup' element = {<SignupUser />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/adminlogin' element = {<AdminLogin/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
