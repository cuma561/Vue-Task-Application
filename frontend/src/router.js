import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './views/Task/Tasks.vue';
import New from './views/Task/New.vue';
import Show from './views/Task/Show.vue';
import Edit from './views/Task/Edit.vue';
import Home from './views/Home.vue';

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
    }
  ]
});