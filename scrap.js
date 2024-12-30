import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import debounce from 'lodash.debounce';

const EditableDataGrid = () => {
  const [rows, setRows] = useState([]);
  
  const [columns] = useState([
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 200, editable: true },
    { field: 'phone', headerName: 'Phone', width: 150, editable: true },
  ]);
  
  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users');  // Your API endpoint
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Handle the process row update with debouncing
  const handleProcessRowUpdate = useCallback(
    debounce(async (newRow) => {
      try {
        await axios.put(`/api/users/${newRow.id}`, newRow);  // Update endpoint
        console.log("Row updated:", newRow);
      } catch (error) {
        console.error("Error updating row", error);
      }
    }, 1000), // Delay of 1 second for debouncing
    []
  );

  const handleRowEdit = async (newRow) => {
    handleProcessRowUpdate(newRow);
    return newRow;
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        processRowUpdate={handleRowEdit}
      />
    </div>
  );
};

export default EditableDataGrid;
