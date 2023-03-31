import React from "react";
import render from "react-test-renderer";

import Eyebrow from "../Eyebrow";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Typography: {
    ...jest.requireActual("antd").Typography,
    Text: "Text",
  },
}));

describe("Eyebrow component test", () => {
  describe("snapshot test", () => {
    it("should match snapshot with default props", () => {
      const tree = render.create(<Eyebrow>Test Text</Eyebrow>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot with isMuted true", () => {
      const tree = render.create(<Eyebrow isMuted>Test Text</Eyebrow>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
