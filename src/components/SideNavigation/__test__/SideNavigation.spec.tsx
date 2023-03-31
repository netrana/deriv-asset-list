import React from "react";
import render from "react-test-renderer";

import SideNavigation from "../SideNavigation";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
}));

describe("SideNavigation component test", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const tree = render
        .create(
          <SideNavigation
            onClick={jest.fn}
            menuItems={[
              {
                title: "test",
                link: "test",
              },
            ]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
