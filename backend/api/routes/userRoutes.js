const usersController = require('../controllers/userController');

module.exports = app => {
  app
    .route('/users')
    .get(usersController.all_users)
    .post(usersController.create_user);

  app
    .route('/users/:userId')
    .get(usersController.read_user)
    .put(usersController.update_user)
    .delete(usersController.delete_user);
};