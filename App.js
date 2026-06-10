import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-[#EDF4F8] flex items-center justify-center p-4 antialiased font-sans">
        {/* Centered Mobile Device Mockup Canvas */}
        <div className="w-[375px] h-[812px] bg-white rounded-[32px] shadow-2xl overflow-hidden relative flex flex-col border border-gray-200">
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
