<template>
  <div id="app">
    <ColorfulCircle lineWidth="50" :progress="50" :showPercentage="true" />
  </div>
</template>

<script>
import ColorfulCircle from "./components/ColorfulCircle.vue";
export default {
  components: {
    ColorfulCircle
  }
};
</script>
