import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SignUpModal from "./components/SignUpModal"; // ✅ Modal

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState("");

  const openModal = (type) => {
    setUserType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setUserType("");
    setModalOpen(false);
  };

  const fakeLogin = (userData) => {
    setUser(userData);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/signin");
  };

  return (
    <>
      <Navbar user={user} onLogout={logout} openModal={openModal} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn onLogin={fakeLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={user} onLogout={logout} />} />
        <Route path="/header" element={<Header />} />
      </Routes>

      {/* ✅ Modal Section */}
      {modalOpen && (
        <SignUpModal
          userType={userType}
          onClose={closeModal}
          onRegister={fakeLogin}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
