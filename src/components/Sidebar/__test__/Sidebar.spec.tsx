import React from "react";
import render from "react-test-renderer";

import Sidebar from "../Sidebar";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  FC: jest.fn(),
  useEffect: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  Link: "Link",
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Menu: "Menu",
  Layout: {
    Sider: "Sider",
  },
}));

describe("Sidebar component test", () => {
  describe("snapshot", () => {
    it("should match snapshot", () => {
      const tree = render.create(<Sidebar menuItems={[]} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
