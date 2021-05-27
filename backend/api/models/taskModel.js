const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: 'task name cannot be blank'
    },
    description: {
      type: String,
      required: 'task description canot be blank'
    },
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);
