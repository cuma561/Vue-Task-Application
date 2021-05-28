<template>
  <div>
    <h1>Edit User</h1>
    <user-form @createOrUpdate="createOrUpdate" :user=this.user></user-form>
  </div>
</template>

<script>
import userForm from '../../components/UserForm.vue';
import { api } from '../../helpers/helpers';

export default {
  name: 'edit-user',
  components: {
    'user-form': userForm
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    createOrUpdate: async function(user) {
      await api.updateuser(user);
      this.flash('user updated sucessfully!', 'success');
      this.$router.push(`/users/`);
    }
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>