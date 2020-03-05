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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ColorfulCircle extends Vue {
  @Prop({ default: 0 }) readonly progress!: number;
  @Prop({ default: false }) readonly showPercentage!: boolean;
  @Prop({ default: true }) readonly showPercentageSymbol!: boolean;
  @Prop({ default: "rgb(76, 154, 255)" }) readonly progressColor!: string;
  @Prop({ default: "#ecedf0" }) readonly bgColor!: string;
  @Prop() readonly startColor!: string | undefined;
  @Prop() readonly middleColor!: string | undefined;
  @Prop() readonly endColor!: string | undefined;
  @Prop({ default: "#6b778c" }) readonly textColor!: string;
  @Prop({ default: "100" }) readonly size!: string;
  @Prop({ default: "25" }) readonly lineWidth!: string;
  @Prop({ default: 10 }) readonly percentSpacing!: number;
  @Prop({ default: "bold 12px Helvetica, Arial, sans-serif" })
  readonly textStyle!: string | undefined;
  @Prop() readonly roundedStroke!: boolean | undefined;
  @Prop() readonly responsive!: boolean | undefined;
  @Prop() readonly id!: string | undefined;

  get strokeDashoffset() {
    const radius = 175;
    const diameter = Math.round(Math.PI * radius * 2);
    const getOffset = (val = 0) => Math.round(((100 - val) / 100) * diameter);
    return getOffset(this.progress);
  }

  get strokeLinecap() {
    return this.roundedStroke ? "round" : "butt";
  }

  get svgSize() {
    return this.responsive ? "100%" : this.size;
  }

  get gradientId() {
    return this.id || "defaultGradient";
  }

  get strokeColor() {
    return this.startColor && this.endColor
      ? this.id
        ? `url('#${this.gradientId}')`
        : `url(#defaultGradient)`
      : this.progressColor;
  }

  get radius() {
    return 175;
  }
}
</script>
