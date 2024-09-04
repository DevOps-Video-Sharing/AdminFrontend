// pages/User.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  Button,
} from '@mui/material';

function createData(
  username,
  password,
  active,
  firstName,
  lastName,
  sub,
  avatar,
  email,
  timestamp
) {
  return { username, password, active, firstName, lastName, sub, avatar, email, timestamp };
}

// Sample data for the table
const initialRows = [
  createData(
    'johndoe',
    '********',
    true,
    'John',
    'Doe',
    'Admin',
    'https://via.placeholder.com/40',
    'johndoe@example.com',
    '2024-09-04 12:34:56'
  ),
  createData(
    'janedoe',
    '********',
    false,
    'Jane',
    'Doe',
    'User',
    'https://via.placeholder.com/40',
    'janedoe@example.com',
    '2024-09-04 12:35:56'
  ),
  createData(
    'alice',
    '********',
    true,
    'Alice',
    'Smith',
    'Moderator',
    'https://via.placeholder.com/40',
    'alice@example.com',
    '2024-09-04 12:36:56'
  ),
];

function User() {
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter rows based on the search term
  const filteredRows = rows.filter((row) =>
    row.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', marginTop: 20 }}>
      {/* Search Bar */}
      <TextField
        label="Search by Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.headerCell}>Username</TableCell>
              <TableCell style={styles.headerCell}>Password</TableCell>
              <TableCell style={styles.headerCell}>Active</TableCell>
              <TableCell style={styles.headerCell}>First Name</TableCell>
              <TableCell style={styles.headerCell}>Last Name</TableCell>
              <TableCell style={styles.headerCell}>Sub</TableCell>
              <TableCell style={styles.headerCell}>Avatar</TableCell>
              <TableCell style={styles.headerCell}>Email</TableCell>
              <TableCell style={styles.headerCell}>Timestamp</TableCell>
              <TableCell style={styles.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={styles.cell}>{row.username}</TableCell>
                <TableCell style={styles.cell}>{row.password}</TableCell>
                <TableCell style={styles.cell}>{row.active ? 'Yes' : 'No'}</TableCell>
                <TableCell style={styles.cell}>{row.firstName}</TableCell>
                <TableCell style={styles.cell}>{row.lastName}</TableCell>
                <TableCell style={styles.cell}>{row.sub}</TableCell>
                <TableCell style={styles.cell}>
                  <Avatar alt={row.firstName} src={row.avatar} />
                </TableCell>
                <TableCell style={styles.cell}>{row.email}</TableCell>
                <TableCell style={styles.cell}>{row.timestamp}</TableCell>
                <TableCell style={styles.cell}>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const styles = {
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '10px',
  },
  cell: {
    textAlign: 'center',
    padding: '10px',
  },
};

export default User;
