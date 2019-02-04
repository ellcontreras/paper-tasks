<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label>Task title</label>
        <input
          type="text"
          v-validate="'required'"
          v-model="title"
          class="input-block"
          placeholder="Finish the homework"
          name="title"
        >
        <div :class="{'alert alert-danger' : errors.first('title')}">{{ errors.first('title') }}</div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          v-validate="'required'"
          v-model="description"
          class="no-resize"
          cols="50"
          name="description"
          placeholder="My awesome description"
        ></textarea>
        <div
          :class="{'alert alert-danger' : errors.first('description')}"
        >{{ errors.first('description') }}</div>
      </div>
      <button
        @click="handleAdd()"
        :disabled="!(title && description)"
        class="btn-block btn-secondary"
      >Add!</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    description: ""
  }),
  methods: {
    handleAdd() {
      this.$store.dispatch("ADD_TASK", {
        title: this.title,
        description: this.description
      });

      this.title = "";
      ths.description = "";
    }
  }
};
</script>

