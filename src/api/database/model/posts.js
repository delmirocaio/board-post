const { insertPost, listPosts, removePost, returnAllPosts } = require("../repositories/board-repository");

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
    },

    returnAllPosts(){
        console.log("todos os docs retornados!")
    }    
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}