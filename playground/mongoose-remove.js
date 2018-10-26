const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//

Todo.findOneAndRemove({_id: '5bce9c2208ece83c48e4bdca'}).then((doc) => {

});


// Todo.findByIdAndRemove('5bce9c2208ece83c48e4bdca').then((doc) => {
//   console.log(doc);
// });
