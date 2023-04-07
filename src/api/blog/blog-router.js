const { Router } = require('express');
const router = Router();

const posts = require('../model/posts');

router.get("/", async (req, res) => {
    return res.json(JSON.stringify(await posts.getAll()))
});

router.post("/", (req, res) => {
    const { title, description } = req.body;

    const result = posts.newPost(title, description);

    return res.json(result);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    posts.deletePost(id)
    return res.status(204).send();
});

module.exports = router;