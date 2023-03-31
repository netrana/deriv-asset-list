import React from "react";
import render from "react-test-renderer";

import Switch from "../Switch";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Switch: "Switch",
  Typography: {
    ...jest.requireActual("antd").Typography,
    Text: "Text",
  },
}));

describe("Switch component test", () => {
  describe("snapshot test", () => {
    it("should match snapshot without title", () => {
      const component = render.create(<Switch />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("should match snapshot with title", () => {
      const component = render.create(<Switch title="Test Title" />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
