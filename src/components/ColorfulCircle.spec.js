/* eslint-disable */
import { mount } from "@vue/test-utils";
import ColorfulCircle from "./ColorfulCircle.vue";
import { expect } from "chai";

describe("ColorfulCircle.vue", () => {
  const wrapper = mount(ColorfulCircle);
  it("should show not default linearGradient id", () => {
    const div = wrapper.find('linearGradient')
    expect(div.exists()).to.be.true
  });

  it("should show a svg tag", () => {
    expect(wrapper.find("svg").exists()).to.be.true
  });

  it("should show show tspan tag", () => {
    expect(wrapper.find("tspan").exists())
  });

  it("should show not show tspan tag", () => {
    wrapper.setProps({showPercentageSymbol: false})
    expect(wrapper.find("tspan").exists()).to.be.false
  });

});
