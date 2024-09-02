import React from 'react'
import { tokens } from '../../theme'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataStudents } from '../../data/mockData'
import { useTheme } from '@emotion/react'
import Header from '../../components/Header'

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'}, // flex - change width
    {field: 'grade', headerName: 'Grade', type: 'number', headerAlign: 'left', align: 'left'},
    {field: 'subject', headerName: 'Subject', flex: 1},
    {field: 'guardian', headerName: 'Parent/Guardian', flex: 1},
    {field: 'phone', headerName: 'Parent/Guardian\'s phone', flex: 1},
    {field: 'email', headerName: 'Parent/Guardian\'s email', flex: 1},
  ];

  return (
    <Box m="20px">
      <Header title="STUDENTS" subtitle="My student info" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.yellowAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[150],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.yellowAccent[200]} !important`,
          },
          minWidth: '0'
        }}
      >
        <DataGrid slots={{ toolbar: GridToolbar }} rows={mockDataStudents} columns={columns} />
      </Box>
    </Box>
  )
}

export default Students