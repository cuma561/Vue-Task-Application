<template>
  <div>
    <h1>Details Task</h1>

   
    <div class="ui labeled input fluid">
      <p>Name Task: {{task.name}}</p>
    </div>

     <div class="ui labeled input fluid">
      <p>Description Task: {{task.description}}</p>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit Task
      </router-link>&nbsp;&nbsp;
      <router-link :to="{ name: 'tasks'}">
        All Tasks
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      task: ''
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
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