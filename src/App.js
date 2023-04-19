import logo from './logo.svg';
import './App.css';
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
