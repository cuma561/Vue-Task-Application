import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './views/Task/Tasks.vue';
import New from './views/Task/New.vue';
import Show from './views/Task/Show.vue';
import Edit from './views/Task/Edit.vue';
import Home from './views/Home.vue';
import NewUser from './views/User/NewUser.vue';
import Users from './views/User/Users.vue';
import User from './views/User/User.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: New
    },
    {
      path: '/tasks/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/users/new',
      name: 'new-user',
      component: NewUser
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'user',
      component: User
    }
  ]
});