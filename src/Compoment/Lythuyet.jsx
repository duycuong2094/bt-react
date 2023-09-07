import React from 'react'

function Lythuyet() {
  return (
    <div> <ul>
    <li>
     <Link to="/">Home Page </Link>
    </li>
    <li>
     <Link to="/about">About Page
     <ul>
     <li>
     <Link to={"/about/product"}>ProDuct</Link>
    </li>
    <li>
     <Link to={"/about/User"}>About User</Link>
    </li>
     </ul>
     </Link>
    </li>
    <li>
     <Link to={"/contact"}>Contact Page </Link>
    </li>
   
   </ul>
   <DemoNavigate/>
       <Routes>
         <Route path="/" element={<HomePage />}>
           {/* Router: Nhận vào 2 tham số 
       + path : Đường dẫn url 
       +element : Component tương ứng  */}
         </Route>
         {/* Router Định tuyến lồng  */}
         <Route path="/about" element={<About />}>
           <Route path="product" element={<Product/>}></Route>
           <Route path="User" element={<AboutUser/>}></Route>
           <Route index element={<AbIndex/>}></Route>
         </Route>
         <Route path="/contact" element={<Contact />}></Route>
         {/* Router báo lỗi */}
         {/* DynamicrRouter */}
         <Route path="/course" element={<Course/>}></Route>
         <Route path="/course/:id" element={<CourseDetail/>}></Route>
         <Route path="/course/:id/:type" element={<CourseDetailType/>}></Route>
         <Route path="*" element={<NotFound/>}/>
         {/* PriviteRouter */}
         <Route element={<PriviteRouter/>}>
         <Route path="/admin" element={<Admin/>}></Route>
         </Route>
         <Route path="/login" element={<Login/>}></Route>
       </Routes></div>
  )
}

export default Lythuyet