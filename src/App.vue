<template>
  <div id="app">
    <vs-main></vs-main>
  </div>
</template>

<script>
import vsMain from "./components/vs-main";
export default {
  name: "App",
  components: {
    vsMain
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
