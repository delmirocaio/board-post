const { insertPost, listPosts, removePost } = require("../database/board-repository");

module.exports = {
    posts: [
        {
            id: "xyz",
            title: "Título teste",
            description: "aqui vem uma descrição bacana"
        }
    ],

    getAll(id_user){
        return listPosts(id_user);
    },

    newPost(id_user, title, description){
        
        insertPost({
            id: generateID(),
            title,
            description,
            id_user,
        })
    },

    deletePost(id){
        console.log('deletePost: ', id)
        removePost({
            id
        });
    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}