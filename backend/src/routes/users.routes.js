const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/isAuthorizated");
const usersControllers = require("../controllers/users.controllers");
const router = Router();

router.get("/", usersControllers.getAllUsers)
router.get("/:id", usersControllers.getUser);
router.post("/", isAuthenticated, isAdmin, usersControllers.postUser);
router.put("/:id", isAuthenticated, isAdmin, usersControllers.editUser);
router.delete("/:id", isAuthenticated, isAdmin, usersControllers.deleteUser);

module.exports = router;
