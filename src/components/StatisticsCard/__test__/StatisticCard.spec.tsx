import React from "react";
import render from "react-test-renderer";

import StatisticsCard from "../StatisticsCard";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Card: "Card",
}));

describe("StatisticsCard component test", () => {
  describe("snapshot test", () => {
    it("should match snapshot with default props", () => {
      const tree = render
        .create(<StatisticsCard title="Test Title" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot with isActive true", () => {
      const tree = render
        .create(<StatisticsCard title="Test Title" isActive />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
