
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import './Navbar.css';
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Register from './pages/Register';
import UserProfile from './components/UserProfile';
import DoctorProfile from './pages/DoctorProfile';
import Appointments from './pages/Appointments'; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </div>
  );
}

export default App;
