<template>
  <div>
    <h1>Details User</h1>

   
    <div class="ui labeled input fluid">
      <p>First Name: {{user.firstname}}</p>
    </div>

    <div class="ui labeled input fluid">
      <p>Last Last: {{user.lastname}}</p>
    </div>

    <div class="ui labeled input fluid">
      <p>Nick Name: {{user.nickname}}</p>
    </div>

    <div class="ui labeled input fluid">
      <p>Email: {{user.email}}</p>
    </div>

     <div class="ui labeled input fluid">
      <p>Description : {{user.description}}</p>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit User
      </router-link>&nbsp;&nbsp;
      <router-link :to="{ name: 'users'}">
        All Users
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../../helpers/helpers';
export default {
  name: 'user',
  data() {
    return {
      user: ''
    };
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>