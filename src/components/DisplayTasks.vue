<template>
  <div class="card">
    <div class="card-body">
      <div v-for="(task, key) of $store.state.tasks" :key="key">
        <h3>{{ task.title}}</h3>
        <p>{{ task.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayTasks"
};
</script>

