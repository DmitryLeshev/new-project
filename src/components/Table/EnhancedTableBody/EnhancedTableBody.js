import React from "react";

import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import { TableBody, TableRow, TableCell } from "@material-ui/core";

function stringChangeLength(string, value = 40) {
  if (!string) {
    return "";
  }
  if (string.length <= value) {
    return string;
  }
  return `${String(string).substring(0, value)} ...`;
}

const EnhancedTableBody = (props) => {
  const {
    classes,
    cellsName,
    data,
    order,
    orderBy,
    stableSort,
    getComparator,
  } = props;
  return (
    <TableBody>
      {stableSort(data, getComparator(order, orderBy)).map((row, index) => {
        return (
          <TableRow key={index} hover role="checkbox" tabIndex={-1}>
            {cellsName.map((cellName, index) => {
              const srcIcon = "data:image/png;base64," + row.icon;
              const renderIcon = row.icon ? (
                <img
                  className={classes.tableCellIcon}
                  src={srcIcon}
                  alt="icon"
                />
              ) : (
                <AddToQueueIcon className={classes.tableCellIcon} />
              );

              const renderCell = cellName.icon ? (
                <div className={classes.tableCellContent}>
                  {renderIcon}
                  {stringChangeLength(row[cellName.id])}
                </div>
              ) : (
                stringChangeLength(row[cellName.id])
              );

              return (
                <TableCell
                  width={cellName.width}
                  key={index}
                  align={cellName.numeric ? "right" : "left"}
                  padding={cellName.disablePadding ? "none" : "default"}
                >
                  {renderCell}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default EnhancedTableBody;
