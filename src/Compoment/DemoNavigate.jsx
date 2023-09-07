import React from "react";
import { useNavigate } from "react-router-dom";

function DemoNavigate() {
  // Navigate được sử dụng để chuyển trang ,sử dụng với history trình duyệt
  // Để chuyển trang
  // useNavigate là hook được cung cấp bởi react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/contact")}>Go to Contact Page </button>
      {/* {Sử dụng với history} */}
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
      {/* Sử dụng navigate với replace=true => không lưu history */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        Go to Contact page - Not save History
      </button>
      {/* Sử dụng navigate để truyền dữ liệu=>để lấy dữ liệu (ContactPag)=>useLocation   */}
      <button onClick={()=>navigate("/contact",{state:{number:10}})}>Goto Contact Whit data</button>
    </div>
  );
}

export default DemoNavigate;
