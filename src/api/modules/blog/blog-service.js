const posts = require('../../database/model/posts');

module.exports = {
    removePost: (id, id_user) => {

    },
    createPost: (title, description, id_user) => {

    },
    listPost: async (id_user) => {
        const result = await posts.getAll(id_user);
        return result;
    }
}