const loginRouter = require('express').Router();
const loginController = require("../Controllers/Login-controller");

loginRouter.post('/addLogin', loginController.addLogin);
loginRouter.post('/loginCheck', loginController.loginCheck);
loginRouter.get('/', loginController.getAllLogin);

module.exports = loginRouter;