const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();
const { isAdmin } = require('./middlewares/adminValidateMiddleware');
const blogRoute = require('../modules/blog/blog-router');

router.use(bodyParser.json());
router.use('/blog', isAdmin, blogRoute)
module.exports = router;