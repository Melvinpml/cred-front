import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupUser from './components/SignupUser';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';
import AddCard from './components/AddCard';
import UserHome from './components/UserHome';
import ViewUser from './components/ViewUser';
import AdminHome from './components/AdminHome';
import ViewAllCards from './components/ViewAllCards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/signup' element = {<SignupUser />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/adminlogin' element = {<AdminLogin/>} />
          <Route path='/userhome' element = {<UserHome/>} />

          <Route path='/viewuser' element = {<ViewUser/>} />
          <Route path='/adminhome' element = {<AdminHome/>} />

          <Route path='/viewcards' element = {<ViewAllCards/>} />


          <Route path='/addcard' element = {<AddCard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
