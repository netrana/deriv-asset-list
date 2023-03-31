import React from "react";
import render from "react-test-renderer";
import VehicleCard from "../VehicleCard";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Card: "Card",
}));

jest.mock("@ant-design/icons", () => ({
  ...jest.requireActual("@ant-design/icons"),
  RightOutlined: "RightOutlined",
  StarFilled: "StarFilled",
}));

describe("VehicleCard component test", () => {
  describe("snapshot test", () => {
    it("should match snapshot with default props", () => {
      const tree = render
        .create(<VehicleCard primaryTitle="Aston Martin" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot for small card", function () {
      const tree = render
        .create(
          <VehicleCard primaryTitle="Aston Martin" cardType="smallCard" />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot for destination card", function () {
      const tree = render
        .create(
          <VehicleCard primaryTitle="Aston Martin" cardType="destinationCard" />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
