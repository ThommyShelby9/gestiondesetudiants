/* var { MongoClient } = require('mongodb')
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

let mongoClient
let deps = {
    id:{
        type: Number,
        required: true,
        unique: true
    },
    nameDep:{
        type: String,
        require: true,
        unique:true
    }
}
async function insertOne(collectionName, data){
    try{
        mongoClient = await getMongoClient()
        const db = mongoClient.db('departement_db')
        const collection = db.collection()
        const depsData = await collection.insertOne(deps)
        return res.status(201).json(depsData.push[0])  
        const mongoClient = await getMongoClient();
        const db = mongoClient.db('departement_db');
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        return result.push[0];  
    }catch(error){
        return res.status(400).json({message: "Ça n'a pas marché!"})
    }
 
}

module.exports = {
    insertOne
} */

var {getClient, getMongoClient} = require('../database')

function DB(){
    return{
        collection: (name)=>{
            const db = getClient().db('departement_db')
            const collection = db.collection(name)
            return collection
        },
    };
}

module.exports = DB