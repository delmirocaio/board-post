const { Router } = require("express");
const router = Router();

const blogController = require("./blog-controller");
const blogSchema = require("./blog-schema");

router.get("/", blogSchema.getAllValidate, blogController.listPosts);
router.post("/", blogSchema.createPostValidate, blogController.createPost);
router.delete("/:id", blogSchema.deletePostValidate, blogController.deletePost);

module.exports = router;
