const UserRoute = require('express').Router();
const UserController = require("./../controllers/user-controller");

UserRoute.post("/createAccount",UserController.createAccount);
UserRoute.post("/signIn",UserController.signIn);
UserRoute.put("/:id",UserController.updateUser);

module.exports = UserRoute;
