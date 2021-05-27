const tasksController = require('../controllers/taskController');

module.exports = app => {
  app
    .route('/tasks')
    .get(tasksController.all_tasks)
    .post(tasksController.create_task);

  app
    .route('/tasks/:taskId')
    .get(tasksController.read_task)
    .put(tasksController.update_task)
    .delete(tasksController.delete_task);
};