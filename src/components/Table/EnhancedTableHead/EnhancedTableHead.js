import React from "react";

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort, cellsName } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {cellsName.map((cellName) => (
          <TableCell
            key={cellName.id}
            align={cellName.numeric ? "right" : "left"}
            padding={cellName.disablePadding ? "none" : "default"}
            sortDirection={orderBy === cellName.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cellName.id}
              direction={orderBy === cellName.id ? order : "asc"}
              onClick={createSortHandler(cellName.id)}
            >
              {cellName.label}
              {orderBy === cellName.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
