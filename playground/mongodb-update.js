// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Connection to MongoDB failed');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5bcd3efeb5d2fa47445cd4a5')
    // }, {
    //   $set: {
    //     text: 'Updated'
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((res) => {
    //   console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5bcd326973078d46e0f400df')
    }, {
      $set: {
        name: 'Guy Pavlov'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });

    client.close();
});
