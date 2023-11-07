var { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017"
let client

async function getMongoClient(){
    if(client){
        console.log('client exists')
        return client
    }
    try{
        client = new MongoClient(url)
        await client.connect()
        return client
    }catch(error){
        console.log(error)
    }
}

function getClient(){
    if(client) return client
}
module.exports = {getMongoClient, getClient}