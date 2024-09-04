// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Admin</h3>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Video
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/comment" style={styles.navLink}>
            Comment
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/user" style={styles.navLink}>
            User
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    background: '#ffffff',
    height: '100vh',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRight: '1px solid #e0e0e0',
  },
  title: {
    marginBottom: '30px',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  navItem: {
    marginBottom: '15px',
    width: '100%',
  },
  navLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '16px',
    padding: '10px 15px',
    borderRadius: '8px',
    display: 'block',
    transition: 'background 0.3s, color 0.3s, border 0.3s',
    border: '2px solid transparent',
  },
};

// Thêm sự kiện onMouseEnter và onMouseLeave để thay đổi style khi hover
const handleMouseEnter = (event) => {
  event.target.style.backgroundColor = '#e0e0e0'; // Màu nền tối hơn khi hover
  event.target.style.color = '#333'; // Màu chữ tối hơn
  event.target.style.border = '2px solid #ccc'; // Thêm khung khi hover
};

const handleMouseLeave = (event) => {
  event.target.style.backgroundColor = '#ffffff'; // Trở lại màu nền trắng
  event.target.style.color = '#555'; // Trở lại màu chữ gốc
  event.target.style.border = '2px solid transparent'; // Trở lại khung trong suốt
};

// Áp dụng các sự kiện hover cho các Link
styles.navLink.onMouseEnter = handleMouseEnter;
styles.navLink.onMouseLeave = handleMouseLeave;

export default Sidebar;
