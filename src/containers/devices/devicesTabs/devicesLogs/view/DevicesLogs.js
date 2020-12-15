import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const DevicesLogs = () => {
  return (
    <TableContainer component={Paper} elevation={2} square>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Категория</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>undefined</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>undefined</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>undefined</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>undefined</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DevicesLogs;
