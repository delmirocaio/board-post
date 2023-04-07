const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');



const options = {
    origin: "http://localhost:3000" //aqui é onde eu faço a minha whitelist de sites que podem fazer requisições no meu servidor
}

router.use(cors());
router.use(bodyParser.json());

router.get("/blog", async (req, res) => {
    return res.json(JSON.stringify(await posts.getAll()))
});

router.post("/blog", (req, res) => {
    const { title, description } = req.body;

    const result = posts.newPost(title, description);

    return res.json(result);
});

router.delete("/blog/:id", (req, res) => {
    const { id } = req.params;
    posts.deletePost(id)
    return res.status(204).send();
});

module.exports = router;