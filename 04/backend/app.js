var express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

var app = express();
app.use(cors());

var port = process.env.PORT || 8005;
const uri = 'mongodb://localhost:27017';
const username = 'admin';
const password = 'admin';
const dbName = 'blog';
const collectionName = 'posts';

app.get('/', function (req, res) {

    connectAndFetchPosts()
        .then((posts) => {
            responseStr = JSON.stringify(posts);
            res.send(responseStr);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

async function connectAndFetchPosts() {

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            user: username,
            password: password
        }
    });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const posts = await collection.find({}).toArray();
        console.log('All posts:', posts);

        return posts;
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

app.listen(port, function () {
    console.log('Sample Mongo app listening on port ' + port);
});
