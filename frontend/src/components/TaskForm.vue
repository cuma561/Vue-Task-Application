<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i> Task Name
      </div>
      <input type="text" placeholder="Enter task name" v-model="task.name" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="info circle icon"></i> Task Description
      </div>
      <input type="text" placeholder="Enter task description" v-model="task.description" />
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'task-form',
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
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
      if (this.task.name === '' || this.task.description === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.task);
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