import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Video from './pages/Video';
import Comment from './pages/Comment';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
