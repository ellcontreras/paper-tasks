<template>
  <div class="card">
    <div class="card-body">
      <div v-if="$store.state.tasks.length === 0">
        <h3>Aún no hay tareas</h3>
      </div>
      <article class="article" v-for="(task, key) of $store.state.tasks" :key="key">
        <h3 class="article-title">{{ task.title}}</h3>
        <p class="text-lead">{{ task.description }}</p>
        <button class="btn-danger" @click="DeleteTask(task)">Eliminar</button>
        <button class="btn-warning">Actualizar</button>
      </article>
    </div>
  </div>
</template>

<script>
import { DELETE_TASK } from "@/store/mutation-types";

export default {
  name: "DisplayTasks",
  methods: {
    DeleteTask(task) {
      this.$store.commit(DELETE_TASK, task);
    }
  }
};
</script>
