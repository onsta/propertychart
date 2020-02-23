<template>
  <div id="app">
    <PropertyChart />
  </div>
</template>

<script lang="ts">
import PropertyChart from "./components/PropertyChart.vue";

export default {
  name: "App",
  components: {
    PropertyChart
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
