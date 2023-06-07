// import logo from './logo.svg';
import './App.css';
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import CoursesList from './pages/coursesList/coursesList';
import CourseDetail from './pages/courseDetail/courseDetail';
import ShoppingCart from './pages/shoppingCart/shoppingCart'
import CartEmpty from './pages/shoppingCart/cartEmpty';
import CartFail from './pages/shoppingCart/cartFail'
import CartSuccesful from './pages/shoppingCart/cartSuccessful';
import { ToastContainer } from 'react-toastify';
import SimpleSlider from './components/SimpleSlider';
import SimpleSlider1 from './components/SimpleSlider1';
import Test from '../src/pages/LevelTest/Test';
import LearningResources from './pages/LearningResources/LearningResources';
import SocialNetwork from './pages/LearningResources/SocialNetwork';
import Profile from './pages/Profile/Profile';
import Course from "../src/pages/Course/course";
import CourseList from './pages/courseList/courseList';

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
        <Route path="/coursesList" element={<CoursesList/>}/>    
        <Route path="/courseDetail" element={<CourseDetail/>}/>   
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>   
        <Route path="/cartEmpty" element={<CartEmpty/>}/> 
        <Route path="/cartFail" element={<CartFail/>}/> 
        <Route path="/cartSuccesful" element={<CartSuccesful/>}/> 
        <Route path="/cartFail" element={<CartFail/>}/> 
        <Route path="/simpleSlider" element={<SimpleSlider/>}/> 
        <Route path="/simpleSlider1" element={<SimpleSlider1/>}/>
        <Route path="/test" element={<Test/>}/> 
        <Route path="/learningResources" element={<LearningResources/>}/> 
        <Route path="/socialNetwork" element={<SocialNetwork/>}/> 
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/course" element={<Course />} />
        <Route path="/courseList" element={<CourseList />} />
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
