/* eslint-disable */
import { mount  } from "@vue/test-utils";
import ColorfulCircle from "./ColorfulCircle.vue";
import { expect } from "chai";

describe("ColorfulCircle.vue", () => {
  const wrapper = mount (ColorfulCircle);

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

  it("should show a svg tag", () => {
    wrapper.setProps({responsive: false})
    expect(wrapper.vm.svgSize).equal('100')
  });

});
