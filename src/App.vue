<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <h1>Paper Tasks</h1>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ADD_TASK } from "@/store/mutation-types";

export default {
  name: "App",
  created() {
    this.$store.subscribe(mutation => {
      console.log(mutation);
      switch (mutation.type) {
        case ADD_TASK:
          this.$toastr.success("Se ha añadido una tarea");
          break;
      }
    });
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
