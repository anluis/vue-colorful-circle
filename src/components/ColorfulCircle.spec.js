/* eslint-disable */
import { mount } from "@vue/test-utils";
import ColorfulCircle from "./ColorfulCircle.vue";
import { expect } from "chai";

describe("ColorfulCircle.vue", () => {
  it("should show a svg tag", () => {
    const wrapper = mount(ColorfulCircle);
    expect(wrapper.find("svg").exists()).to.be.true
  });
  it("should show a svg tag", () => {
    const wrapper = mount(ColorfulCircle, {
      propsData: {
        showPercentageSymbol: false
      }
    });
    expect(wrapper.find("tspan").exists()).to.be.false
  });
});
