<template>
  <div class="row">
    <div class="col-8">
      <display-tasks/>
    </div>
    <div class="col-4">
      <form-add-task/>
    </div>
  </div>
</template>

<script>
import FormAddTask from "@/components/FormAddTask.vue";
import DisplayTasks from "@/components/DisplayTasks.vue";

export default {
  name: "home",
  components: {
    FormAddTask,
    DisplayTasks
  }
};
</script>
