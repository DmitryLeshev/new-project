const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@containers": "src/containers",
    "@services": "src/services",
    "@layouts": "src/layouts",
    "@assets": "src/assets",
    "@redux": "src/redux",
    "@theme": "src/theme",
    "@src": "src",
  })(config);

  return config;
};
