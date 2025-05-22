import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VolunteerSignup from "./components/VolunteerSignup";
import OrganizationSignup from "./components/OrganizationSignup";
import AttacheeSignup from "./components/ AttacheeSignup";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Foooter from "./components/Foooter";
import Footer from "./components/Footer";
import About from "./components/About";
import VolunteerDashboard from "./components/VolunteerDashboard";
import OrganizationDashboard from "./components/OrganizationDashboard";






function App() {
  
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="navbar" element={<Navbar/>}/>
      <Route path="/signup/volunteer" element={<VolunteerSignup />} />
      <Route path="/signup/organization" element={<OrganizationSignup/>}/>
      <Route path="/signup/attachee" element={<AttacheeSignup/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/foooter" element={<Foooter/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/volunteerdashboard" element={<VolunteerDashboard/>}/>
      <Route path="/organizationdashboard" element={<OrganizationDashboard/>}/>
      



    </Routes>
    
          <Footer/>
    </>

  );
}

export default App
