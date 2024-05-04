import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StudentHome from "./Pages/StudentHome";
import UserHeader from "./components/UserHeader";
import Question from "./Pages/Question";
import UserAbout from "./Pages/UserAbout";
import UserContact from "./Pages/UserContact";
import TeacherHome from "./Pages/TeacherHome";
import StudentInteract from "./Pages/StudentInteract";

function App() {
  // Function to check if user is logged in as a student
  const isLoggedInStudent = () => {
    // Logic to check if the user is logged in as a student (e.g., check user role)
    return true; // For demonstration purpose, assuming the user is always logged in as a student
  };

  return (
    <BrowserRouter>
      <div>
        {/* Routes for Header */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/courses" element={<Header />} />
          <Route path="/contact" element={<Header />} />
          <Route path="/about" element={<Header />} />
          <Route path="/login" element={<Header />} />
          <Route path="/signup" element={<Header />} />
          <Route path="/studenthome" element={isLoggedInStudent() ? <UserHeader /> : <Navigate to="/login" />} />
        </Routes>

        {/* Routes for content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/question" element={<Question />} />
          <Route path="/userabout" element={<UserAbout />} />
          <Route path="/usercontact" element={<UserContact />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/teacherhome" element={<TeacherHome />} />
          <Route path="/studentinteract" element={<StudentInteract />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;