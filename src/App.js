// import logo from './logo.svg';
import './App.css';
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import { Routes, Route } from "react-router-dom";
// import forgot_password from "../src/pages/forgot_password";
// import new_password from "../src/pages/new_password";
// import success from "../src/pages/success";
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<forgot_password/>}/>
        <Route path="/new_password" element={<new_password/>}/>
        <Route path="/success" element={<success/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>      
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
