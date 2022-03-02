import React from 'react';
import styled from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material/index';
const TableBlock = styled.div`
  width: 100%;
  height: 40rem;
  border-radius: 9px;
  table {
    border-collapse: collapse;
    thead {
      background-color: #f3f6f9;
    }
  }
`;

const upperColumns = ['일자', '카테고리', '항목', '차변', '우변', '메모'];

const DoubleEntryTable = () => {
  return (
    <TableBlock>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {upperColumns.map((column, idx) => (
                <TableCell
                  align="center"
                  key={idx}
                  colSpan={idx === 3 || idx === 4 ? 2 : 1}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={3}></TableCell>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">금액</TableCell>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">금액</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </TableBlock>
  );
};

export default DoubleEntryTable;
