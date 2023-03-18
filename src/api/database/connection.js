const {MongoClient} = require('mongodb');

//String de conexão

const uri = `mongodb://root:Caio123@localhost:27017/?authMechanism=DEFAULT`;

const client = new MongoClient(uri);

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Establish and verify connection
      await client.db("board-db").command({ ping: 1 });
      console.log("Connected successfully to server");
    }finally{

    }
}
run();
module.exports = client.db("board-db");