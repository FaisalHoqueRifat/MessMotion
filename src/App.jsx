import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Members from './components/Members';
import Billing from './components/Billing';
import Contact from './components/Contact';
import Login from './components/Login';       // Import Login component
import Signup from './components/Signup';     // Import Signup component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/members" element={<Members />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add Login and Signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
