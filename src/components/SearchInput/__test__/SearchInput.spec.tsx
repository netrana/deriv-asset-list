import React from "react";
import render from "react-test-renderer";

import SearchInput from "../SearchInput";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

jest.mock("antd", () => ({
  Input: {
    Search: "Search",
  },
  Space: "Space",
}));

describe("SearchInput component test", () => {
  describe("snapshot ", () => {
    it("should render correctly", () => {
      const tree = render.create(<SearchInput onSearch={jest.fn} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
