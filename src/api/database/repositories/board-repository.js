const client = require('../connection');

async function insertPost({id, title, description, id_user}) {
    console.log({id_user})
    return await client.collection("post-board").insertOne({
        id,
        title,
        description,
        relation_id: id_user,
    })
}

async function listPosts(id_user){
    return await client.collection("post-board").find({
        relation_id: id_user,
    }).toArray(); 
}

async function removePost({ id }){
    return await client.collection("post-board").deleteOne({
        id
    })
}

async function returnAllPosts(){
    return await client.collection("post-board").find({}).toArray();
}

module.exports = {insertPost, listPosts, removePost, returnAllPosts};