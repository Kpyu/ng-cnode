// Angular-CLI server configuration
// Unrelated to environment.dev|prod.ts

/* jshint node: true */

module.exports = function (environment) {
  console.log('启动');
  return {
    environment: environment,
    baseURL: '/',
    locationType: 'auto'
  };
};
