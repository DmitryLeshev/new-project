import React from "react";

import { TextField } from "@material-ui/core";

const RightBar = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <TextField
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default RightBar;
