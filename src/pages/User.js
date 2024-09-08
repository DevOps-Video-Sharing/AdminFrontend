import React, { useState, useEffect } from 'react';
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

function User() {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setRows(data); // Assuming the data format directly matches what is needed for the table
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Filter rows based on the search term
  const filteredRows = rows.filter((row) =>
    row.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[90%] mx-auto mt-5">
      {/* Search Bar */}
      <TextField
        label="Search by Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {/* Table */}
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell className="font-bold text-center py-2">Username</TableCell>
              <TableCell className="font-bold text-center py-2">Password</TableCell>
              <TableCell className="font-bold text-center py-2">Active</TableCell>
              <TableCell className="font-bold text-center py-2">First Name</TableCell>
              <TableCell className="font-bold text-center py-2">Last Name</TableCell>
              <TableCell className="font-bold text-center py-2">Sub</TableCell>
              {/* <TableCell className="font-bold text-center py-2">Avatar</TableCell> */}
              <TableCell className="font-bold text-center py-2">Email</TableCell>
              <TableCell className="font-bold text-center py-2">Timestamp</TableCell>
              <TableCell className="font-bold text-center py-2">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-center py-2">{row.username}</TableCell>
                <TableCell className="text-center py-2">{row.password}</TableCell>
                <TableCell className="text-center py-2">{row.active ? 'Yes' : 'No'}</TableCell>
                <TableCell className="text-center py-2">{row.firstName}</TableCell>
                <TableCell className="text-center py-2">{row.lastName}</TableCell>
                <TableCell className="text-center py-2">{row.sub}</TableCell>
                {/* <TableCell className="text-center py-2">
                  <Avatar alt={row.firstName} src={row.avatar || 'https://via.placeholder.com/40'} />
                </TableCell> */}
                <TableCell className="text-center py-2">{row.email || 'N/A'}</TableCell>
                <TableCell className="text-center py-2">{row.timestamp || 'N/A'}</TableCell>
                <TableCell className="text-center py-2">
                  <Button
                    variant="contained"
                    color="primary"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
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

export default User;
