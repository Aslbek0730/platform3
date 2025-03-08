import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/AuthProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ArtDesign from './pages/ArtDesign';
import ITCourses from './pages/ITCourses';
import Communication from './pages/Communication';
import Photography from './pages/Photography';
import Finance from './pages/Finance';
import ContentWriting from './pages/ContentWriting';
import Science from './pages/Science';
import Network from './pages/Network';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/art-design" element={<ArtDesign />} />
            <Route path="/it-courses" element={<ITCourses />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/content-writing" element={<ContentWriting />} />
            <Route path="/science" element={<Science />} />
            <Route path="/network" element={<Network />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;