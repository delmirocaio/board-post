const posts = require('../model/posts');

module.exports = {
    removePost: (id, id_user) => {

    },
    createPost: (title, description, id_user) => {

    },
    listPost: async (id_user) => {
        console.log(id_user)
        const result = await posts.getAll(id_user);
        return JSON.stringify(result);
    }
}