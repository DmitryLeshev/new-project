import React from "react";

import Table from "@src/components/Table/Table";

const DevicesProcesses = ({ loading, error, list, cellsName }) => {
  return (
    <Table loading={loading} error={error} list={list} cellsName={cellsName} />
  );
};

export default DevicesProcesses;
