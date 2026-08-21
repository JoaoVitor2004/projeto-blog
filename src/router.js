const express = require("express")
const postController = require("./controllers/postController")

const router = express.Router()

router.get("/", postController.index)
router.get("/create", postController.create)
router.post("/save", postController.save)
router.post("/delete/:id", postController.delete)
router.get("/edit", postController.edit)
router.post("/update/:id", postController.update)

module.exports = router