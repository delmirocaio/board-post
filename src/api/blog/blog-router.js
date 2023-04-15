const { Router } = require('express');
const router = Router();

const posts = require('../model/posts');
const blogService = require('./blog-service');
const { celebrate, Joi, Segments } = require('celebrate');

const posts = require('../model/posts');
const blogService = require('./blog-service');


router.get("/", celebrate({
    [Segments.QUERY]: {
        id_user: Joi.string().optional(),
        adminCode: Joi.string().required()
    },
}),async (req, res) => {
    const { id_user } = req.query;
    const listOfPosts = await blogService.listPost(id_user);

    return res.json(listOfPosts)
});

router.post("/", (req, res) => {
    const { title, description } = req.body;
    const { id_user } = req.headers;
    const result = posts.newPost(id_user, title, description);

    return res.json(result);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    posts.deletePost(id)
    
    return res.status(204).send();
});

module.exports = router;