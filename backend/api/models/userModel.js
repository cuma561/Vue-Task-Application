const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: 'first name cannot be blank'
    },
    lastname: {
      type: String,
      required: 'last name canot be blank'
    },
    nickname: {
    	type: String,
    	required: 'nick name cannot be blank'
    },
    email: {
    	type: String,
    	required: 'email cannot be blank'
    }
    description: {
    	type: String,
    	required: 'description canot be blank'
    }
  },
  { collection: 'user' }
);

module.exports = mongoose.model('user', userSchema);