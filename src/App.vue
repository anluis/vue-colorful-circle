<template>
  <div id="app">
    <ColorfulCircle
      :responsive="false"
      size="100"
      lineWidth="50"
      :progress="60"
      progressColor="rgba(64, 144, 255, 1)"
      bgColor="#ecedf0"
      textColor="#6b778c"
      textStyle="bold 4rem Helvetica, Arial, sans-serif"
      :percentSpacing="0"
      :roundedStroke="true"
      :showPercentage="true"
      :showPercentageSymbol="true"
    />
  </div>
</template>

<script>
import ColorfulCircle from "./ColorfulCircle.vue";
export default {
  components: {
    ColorfulCircle
  }
};
</script>
