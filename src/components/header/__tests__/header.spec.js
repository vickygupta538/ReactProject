import React from "react";
import renderer from "react-test-renderer";
import Header from "../index";
import logo from "../../assets/amazon_logo.svg";

const setUp = (props = {}) => {
  const component = renderer.create(<Header />);
  return component;
};

describe("Header Component Test Cases", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should match snapshot renderer", () => {
    const wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const wrapper = component.root.find(el => el.type === "header" && el.props["data-test"] === "headerComponent");
    expect(wrapper).toBeTruthy();
  });
  it("Should render img tag", () => {
    const wrapper = component.root.find(el => el.type === "img");

    expect(wrapper.props.src).toBe(logo);
  });

  it("Should render heading content", () => {
    const wrapper = component.root.find(el => el.type === "div" && el.props["className"] === "headingContent");
    expect(wrapper.children[0]).toBe("Star Wars Character Search");
  });
});
