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

function createData(commentId, userId, userName, text, isToxic) {
  return { commentId, userId, userName, text, isToxic };
}

// Sample data for the table
const initialRows = [
  createData('cmt1', 'usr1', 'John Doe', 'This is a comment', true),
  createData('cmt2', 'usr2', 'Jane Doe', 'Another comment', false),
  createData('cmt3', 'usr3', 'Alice Smith', 'Yet another comment', true),
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
        label="Search by Comment ID"
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
              <TableCell className="font-bold text-center py-2">Comment ID</TableCell>
              <TableCell className="font-bold text-center py-2">User ID</TableCell>
              <TableCell className="font-bold text-center py-2">User Name</TableCell>
              <TableCell className="font-bold text-center py-2">Comment</TableCell>
              <TableCell className="font-bold text-center py-2">Is Toxic</TableCell>
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
                  <span
                    className={`${
                      row.isToxic ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    } px-2 py-1 rounded-full text-sm`}
                  >
                    {row.isToxic ? 'False' : 'True'}
                  </span>
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

export default Comment;
