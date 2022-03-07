const { Router } = require("express");
const usersControllers = require("../controllers/users.controllers");
const router = Router();

router.get("/:id", usersControllers.getUser);
router.post("/", usersControllers.postUser);
router.put("/:id", usersControllers.editUser);
router.delete("/:id", usersControllers.deleteUser);

module.exports = router;
