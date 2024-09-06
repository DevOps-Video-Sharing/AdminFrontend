// pages/VideoBanned.js
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
  videoId,
  userId,
  userName,
  videoName,
  views,
  likes,
  reports
) {
  return { videoId, userId, userName, videoName, views, likes, reports };
}

// Sample data for the table
const initialRows = [
  createData(
    'johndoe',
    'John',
    'Doe',
    'Admin',
    'https://via.placeholder.com/40',
      'johndoe@example.com',
    '50'
  ),
  createData(
    'janedoe',
    'Jane',
    'Doe',
    'VideoBanned',
    'https://via.placeholder.com/40',
      'janedoe@example.com',
    '10'
  ),
  createData(
    'alice',
    'Alice',
    'Smith',
    'Moderator',
    'https://via.placeholder.com/40',
      'alice@example.com',
    '20'
  ),
];

function VideoBanned() {
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter rows based on the search term
  const filteredRows = rows.filter((row) =>
    row.videoId.toLowerCase().includes(searchTerm.toLowerCase())
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
              <TableCell className="font-bold text-center py-2">Video ID</TableCell>
              <TableCell className="font-bold text-center py-2">User ID</TableCell>
              <TableCell className="font-bold text-center py-2">userName</TableCell>
              <TableCell className="font-bold text-center py-2">Video Name</TableCell>
              <TableCell className="font-bold text-center py-2">Views</TableCell>
              <TableCell className="font-bold text-center py-2">Likes</TableCell>
              <TableCell className="font-bold text-center py-2">Reports</TableCell>
              <TableCell className="font-bold text-center py-2">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-center py-2">{row.videoId}</TableCell>
                <TableCell className="text-center py-2">{row.userId}</TableCell>
                <TableCell className="text-center py-2">{row.userName}</TableCell>
                <TableCell className="text-center py-2">{row.videoName}</TableCell>
                <TableCell className="text-center py-2">{row.views}</TableCell>
                <TableCell className="text-center py-2">{row.likes}</TableCell>
                <TableCell className="text-center font-semibold">
                <div className="inline-block px-4 py-2 rounded-full text-white bg-red-400 hover:bg-red-500">
                    {row.reports}
                </div>
                </TableCell>

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

export default VideoBanned;
