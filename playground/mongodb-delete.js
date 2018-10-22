// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Connection to MongoDB failed');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteOne({
    //   text: 'Walk the dog'
    // }).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //   completed: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Jen'});

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5bcd3f80599d1628c7d1e7ae')
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

    client.close();
});
