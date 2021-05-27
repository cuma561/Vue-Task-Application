const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');
const routesTwo = require('./api/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', true);
mongoose.connect(
  'mongodb://localhost:27017/vue-task',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
routesTwo(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ message: 'Welcome to the task backend application' });
});

console.log(`Server started on port ${port}`);