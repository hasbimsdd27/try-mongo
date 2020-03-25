const express = require("express");
const router = express.Router();

const TodoController = require("../controller/todoController");

router.get("/test", TodoController.test);
router.post("/create", TodoController.create);
router.get("/", TodoController.getTodo);
router.get("/:id", TodoController.todoDetails);
router.put("/update/:id", TodoController.todoUpdate);
router.delete("/delete/:id", TodoController.todoDelete);

module.exports = router;
