import React from "react";
import render from "react-test-renderer";

import TextLink from "../TextLink";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
  MouseEventHandler: jest.fn(),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Typography: {
    ...jest.requireActual("antd").Typography,
    Text: "Text",
  },
}));

describe("TextLink component test", () => {
  describe("snapshot test", () => {
    it("should match snapshot", () => {
      const tree = render.create(<TextLink onClick={jest.fn} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
