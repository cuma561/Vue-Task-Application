<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i> User FirstName
      </div>
      <input type="text" placeholder="Enter user firstname" v-model="user.firstname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i> User LastName
      </div>
      <input type="text" placeholder="Enter user lastname" v-model="user.lastname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i> User NickName
      </div>
      <input type="text" placeholder="Enter user nickname" v-model="user.nickname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i> User Email
      </div>
      <input type="text" placeholder="Enter user email" v-model="user.email" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i> User Description
      </div>
      <input type="text" placeholder="Enter user description" v-model="user.description" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>
<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          firstname: '',
          lastname: '',
          nickname: '',
          email: '',
          description: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.user.firstname === '' || this.user.lastname === '' || this.user.nickname === '' || this.user.email === '' || this.user.description === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.user);
      }
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>