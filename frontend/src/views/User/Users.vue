<template>
  <div>
    <h1>All Users</h1>
    <table id="tasks" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="user icon"></i>Nickname </th>
                    <th> <i class="lock open icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
        </tr>
      </thead>
      <tr v-for="(user, i) in users" :key="i">
        <td>{{ user.nickname }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'user', params: { id: user._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit-user', params: { id: user._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(user._id)">
          <a :href="`/users/${user._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../../helpers/helpers';
export default {
  name: 'users',
  data() {
    return {
      users: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteuser(id);
      this.flash('user deleted sucessfully!', 'success');
      const newuser = this.users.filter(user => user._id !== id);
      this.users = newuser;
    }
  },
  async mounted() {
    this.users = await api.getusers();
  }
};
</script>