import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./Compoment/HomePage";
import About from "./Compoment/About/About";
import Contact from "./Compoment/Contact/Contact";
import NotFound from "./Compoment/NotFound";
import Product from "./Compoment/About/Product";
import AboutUser from "./Compoment/About/AboutUser";
import AbIndex from "./Compoment/About/AbIndex";
import DemoNavigate from "./Compoment/DemoNavigate";
import Course from "./Compoment/DynamicRouter/Course";
import CourseDetail from "./Compoment/DynamicRouter/CourseDetail";
import CourseDetailType from "./Compoment/DynamicRouter/CourseDetailType";
import Admin from "./Compoment/PrivateRouter/Admin";
import Login from "./Compoment/PrivateRouter/Login";
import PriviteRouter from "./Compoment/PrivateRouter/PriviteRouter";
import Index from "./Baitap/Index";
import Contactbt from "./Baitap/Contactbt";
import AboutBt from "./Baitap/AboutBt";
import Blog from "./Baitap/Blog";
import Repair from "./Baitap/Repair";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Router: Nhận vào 2 tham số 
        + path : Đường dẫn url 
        +element : Component tương ứng  */}
          <Route path="/" element={<Index />}></Route>
          {/* <Route path="/about" element={<AboutBt />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contactbt />}></Route>
          <Route path="/repair" element={<Repair />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
