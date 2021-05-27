const usersController = require('../controllers/userController');

module.exports = app => {
  app
    .route('/tasks')
    .get(usersController.all_users)
    .post(usersController.create_user);

  app
    .route('/tasks/:taskId')
    .get(usersController.read_user)
    .put(usersController.update_user)
    .delete(usersController.delete_user);
};