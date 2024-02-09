
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NavBar } from "./components/common/NavBar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgetPassword } from "./pages/ForgetPassword";
import { UpdatePassword } from "./pages/UpdatePassword";
import { VerfyEmail } from "./pages/VerfyEmail";
import { AboutUs } from "./pages/AboutUs";


function App() {
  return (
    <div className="w-screen min-h-screen bg-[#000814] flex flex-col font-inter mx-auto ">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/forget-password" element={<ForgetPassword></ForgetPassword>}/>
        <Route path="/update-password/:id" element={<UpdatePassword></UpdatePassword>}/>
        <Route path="/verify-email" element={<VerfyEmail></VerfyEmail>}/>
        <Route path="/about" element={<AboutUs></AboutUs>}/>
      </Routes>
    </div>
  );
}

export default App;
