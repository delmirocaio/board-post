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

module.exports = {insertPost, listPosts};