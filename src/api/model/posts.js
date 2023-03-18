const { insertPost, listPosts } = require("../database/board-repository");

module.exports = {
    posts: [
        {
            id: "xyz",
            title: "Título teste",
            description: "aqui vem uma descrição bacana"
        }
    ],

    getAll(){
        return listPosts();
    },

    newPost(title, description){
        insertPost({
            id: generateID(),
            title,
            description
        })
    },

    deletePost(id){

    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}