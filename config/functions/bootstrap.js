const { initPermissions } = require('./permissions.helper');
const { dataSeed } = require('./seed');

module.exports = () => {
  initPermissions();
  dataSeed();
};
