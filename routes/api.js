const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://localhost:3000" //aqui é onde eu faço a minha whitelist de sites que podem fazer requisições no meu servidor
}

router.use(cors());

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});

router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);

    res.send("Post adicionado com sucesso!")
});

module.exports = router;