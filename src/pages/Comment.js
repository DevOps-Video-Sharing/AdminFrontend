// pages/Comment.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from '@mui/material';

function createData(commentId, userId, userName, text) {
  return { commentId, userId, userName, text };
}

// Sample data for the table
const initialRows = [
  createData('johndoe', 'John', 'Doe', 'Admin'),
  createData('janedoe', 'Jane', 'Doe', 'User'),
  createData('alice', 'Alice', 'Smith', 'Moderator'),
];

function Comment() {
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter rows based on the search term
  const filteredRows = rows.filter((row) =>
    row.commentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[90%] mx-auto mt-5">
      {/* Search Bar */}
      <TextField
        label="Search by CommentId"
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
              <TableCell className="font-bold text-center py-2">CommentId</TableCell>
              <TableCell className="font-bold text-center py-2">UserId</TableCell>
              <TableCell className="font-bold text-center py-2">UserName</TableCell>
              <TableCell className="font-bold text-center py-2">Text</TableCell>
              <TableCell className="font-bold text-center py-2">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-center py-2">{row.commentId}</TableCell>
                <TableCell className="text-center py-2">{row.userId}</TableCell>
                <TableCell className="text-center py-2">{row.userName}</TableCell>
                <TableCell className="text-center py-2">{row.text}</TableCell>
                <TableCell className="text-center py-2">
                  <Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600">
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

export default Comment;
