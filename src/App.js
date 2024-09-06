import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Video from './pages/Video';
import Comment from './pages/Comment';
import User from './pages/User';
import Login from './pages/Login';

function MainLayout() {
  // Get the current location to check the route
  const location = useLocation();

  // Determine if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex">
      {/* Conditionally render the Sidebar only if not on the login page */}
      {!isLoginPage && <Sidebar />}
      <div className={`flex-1 ${!isLoginPage ? 'ml-[200px]' : ''} p-4`}>
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
