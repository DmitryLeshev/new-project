import React from "react";

import Table from "@src/components/Table/Table";

const DevicesPrograms = ({ loading, error, list, cellsName }) => {
  return (
    <Table loading={loading} error={error} list={list} cellsName={cellsName} />
  );
};

export default DevicesPrograms;
