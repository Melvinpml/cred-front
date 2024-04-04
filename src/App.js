import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupUser from './components/SignupUser';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element = {<SignupUser />} />
          <Route path='/login' element = {<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
