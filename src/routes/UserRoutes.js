
const { Router } = require('express');
const {ListtUser} = requere("../controllers/user");

const route = Router();

route.get("/users", ListtUser);
route.post("/users", createUser);

module.exports = route;
