const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');

const blogRoute = require('../blog/blog-router');
const ADMIN_AUTHORIZED_CODE = 123;

const options = {
    origin: "http://localhost:3000" //aqui é onde eu faço a minha whitelist de sites que podem fazer requisições no meu servidor
}

const isAdmin = (req,res,next) => {
    const { adminCode } = req.query;
    if(adminCode == ADMIN_AUTHORIZED_CODE){
        return next();
    }
    return res.send('Você não é um administrador!')
}

router.use(bodyParser.json());
router.use('/blog', isAdmin, blogRoute)

module.exports = router;