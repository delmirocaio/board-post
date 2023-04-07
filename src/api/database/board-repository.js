const client = require('./connection');

async function insertPost({id, title, description}) {
    return await client.collection("post-board").insertOne({
        id,
        title,
        description
    })
}

async function listPosts(){
    return await client.collection("post-board").find({}).toArray(); 
}

async function removePost({ id }){
    return await client.collection("post-board").deleteOne({
        id
    })
}

module.exports = {insertPost, listPosts, removePost};