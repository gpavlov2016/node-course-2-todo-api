const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlentgh: 1,
    trim: true
  }
});

module.exports = {User};
