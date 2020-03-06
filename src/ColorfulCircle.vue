<template>
  <svg :width="svgSize" :height="svgSize" viewBox="-25 -25 400 400">
    <defs v-if="startColor && endColor">
      <linearGradient :id="gradientId" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" :stop-color="startColor" />
        <stop v-if="middleColor" offset="50%" :stop-color="middleColor" />
        <stop offset="100%" :stop-color="endColor" />
      </linearGradient>
    </defs>
    <circle
      :stroke="bgColor"
      cx="175"
      cy="175"
      r="175"
      :stroke-width="lineWidth"
      fill="none"
    />
    <circle
      :stroke="strokeColor"
      transform="rotate(-90 175 175)"
      cx="175"
      cy="175"
      r="175"
      stroke-dasharray="1100"
      :stroke-width="lineWidth"
      :stroke-linecap="strokeLinecap"
      fill="none"
      :stroke-dashoffset="strokeDashoffset || 1100"
    />
    <text
      v-if="showPercentage"
      :style="{ font: textStyle }"
      :fill="textColor"
      :x="radius"
      :y="radius"
      text-anchor="middle"
      dominant-baseline="central"
    >
      {{ progress }}
      <tspan v-if="showPercentageSymbol" :dx="percentSpacing">%</tspan>
    </text>
  </svg>
</template>

<script>
export default {
  name: "ColorfulCircle",
  props: {
    progress: {
      type: Number,
      default: 0
    },
    showPercentage: {
      type: Boolean,
      default: false
    },
    showPercentageSymbol: {
      type: Boolean,
      default: true
    },
    progressColor: {
      type: String,
      default: '"rgb(76, 154, 255)'
    },
    bgColor: {
      type: String,
      default: "#ecedf0"
    },
    startColor: {
      type: String
    },
    middleColor: {
      type: String
    },
    endColor: {
      type: String
    },
    textColor: {
      type: String,
      default: "#6b778c"
    },
    size: {
      type: String,
      default: "100"
    },
    lineWidth: {
      type: String,
      default: "25"
    },
    percentSpacing: {
      type: Number,
      default: 10
    },
    textStyle: {
      type: String,
      default: "bold 12px Helvetica, Arial, sans-serif"
    },
    roundedStroke: {
      type: Boolean
    },
    responsive: {
      type: Boolean
    },
    id: {
      type: String
    }
  },
  computed: {
    strokeDashoffset() {
      const radius = 175;
      const diameter = Math.round(Math.PI * radius * 2);
      const getOffset = (val = 0) => Math.round(((100 - val) / 100) * diameter);
      return getOffset(this.progress);
    },

    strokeLinecap() {
      return this.roundedStroke ? "round" : "butt";
    },

    svgSize() {
      return this.responsive ? "100%" : this.size;
    },

    gradientId() {
      return this.id || "defaultGradient";
    },

    strokeColor() {
      return this.startColor && this.endColor
        ? this.id
          ? `url('#${this.gradientId}')`
          : `url(#defaultGradient)`
        : this.progressColor;
    },

    radius() {
      return 175;
    }
  }
};
</script>
