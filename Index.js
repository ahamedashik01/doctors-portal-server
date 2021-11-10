const { MongoClient } = require('mongodb');
const express = require('express');
var cors = require('cors');
require('dotenv').config();

const ObjcetId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 5000;

// mideleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5cdlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('conneted')
    }
    finally {
        // await.client.close()
    }
}

run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Root Of doctors portal!')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})