import React from "react";

import { Table, TableContainer } from "@material-ui/core";

import ErrorIndicator from "@containers/ErrorBoundry/components/ErrorIndicator/ErrorIndicator";
import { Loader } from "@components";
import useStyles from "./styles";
import EnhancedTableBody from "./EnhancedTableBody";
import EnhancedTableHead from "./EnhancedTableHead";

const EnhancedTable = (props) => {
  const { data, cellsName } = props;
  const { loaded = false, error = false, details = null } = data;

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  if (!loaded) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Table
        className={classes.table}
        aria-labelledby="tableTitle"
        size="medium"
        aria-label="enhanced table"
        stickyHeader
      >
        <EnhancedTableHead
          classes={classes}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          cellsName={cellsName}
        />
        <EnhancedTableBody
          classes={classes}
          cellsName={cellsName}
          data={details}
          order={order}
          orderBy={orderBy}
          stableSort={stableSort}
          getComparator={getComparator}
        />
      </Table>
    </TableContainer>
  );
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default EnhancedTable;
