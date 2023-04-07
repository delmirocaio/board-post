const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');

const blogRoute = require('../blog/blog-router');


const options = {
    origin: "http://localhost:3000" //aqui é onde eu faço a minha whitelist de sites que podem fazer requisições no meu servidor
}

router.use(bodyParser.json());
router.use('/blog', blogRoute)

module.exports = router;