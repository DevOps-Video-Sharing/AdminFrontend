import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Video from './pages/Video';
import Comment from './pages/Comment';
import User from './pages/User';
import Login from './pages/Login';
import VideoBanned from './pages/VideoBanned';
import ProtectedRoute from './pages/ProtectedRoute';

function MainLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex">
      {!isLoginPage && <Sidebar />}
      <div className={`flex-1 ${!isLoginPage ? 'ml-[200px]' : ''} p-4`}>
        <Routes>
          {/* Protecting routes */}
          <Route path="/" element={<ProtectedRoute element={<Video />} />} />
          <Route path="/comment" element={<ProtectedRoute element={<Comment />} />} />
          <Route path="/user" element={<ProtectedRoute element={<User />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/videobanned" element={<ProtectedRoute element={<VideoBanned />} />} />
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
