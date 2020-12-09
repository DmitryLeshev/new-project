/* eslint-disable */
const query = (path, args) => {
  if (process.env.NODE_ENV !== "production") {
    let query = require("../chipher/query");
    window.query = (path, args) => query.q(path, args);
    return query.q(path, args);
  } else {
    if (window.q === undefined) console.error("Query func not found");
    else {
      window.query = window.q;
      return window.q(path, args);
    }
  }
};

export default query;
