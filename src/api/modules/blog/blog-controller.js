const posts = require("../../database/model/posts");
const blogService = require("./blog-service");

module.exports = {
  listPosts: async (req, res) => {
    const { id_user } = req.query;
    const listOfPosts = await blogService.listPost(id_user);

    return res.json(listOfPosts);
  },
  createPost: (req, res) => {
    const { title, description } = req.body;
    const { id_user } = req.headers;
    const result = posts.newPost(id_user, title, description);

    return res.json(result);
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    posts.deletePost(id);

    return res.status(204).send();
  },
};
