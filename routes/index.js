// run all routes

const loginRoutes = require('./login-register-api-routes');
const htmlRoutes = require('./html-routes');
const apiRoutes = require('./api-routes');

module.exports = app =>{
    loginRoutes(app);
    apiRoutes(app);
    htmlRoutes(app);
}