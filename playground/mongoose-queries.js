const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bce8dfbb4e7424f24d52938';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

var userId = '5bcdf11a9bc8643e085b2a01';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));