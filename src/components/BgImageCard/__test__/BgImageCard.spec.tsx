import BgImageCard from "../BgImageCard";
import render from "react-test-renderer";

jest.mock("components/Button/Button", () => "Button");

describe("BgImageCard component test", () => {
  describe("snapshot", () => {
    it("should match snapshot", () => {
      const tree = render
        .create(<BgImageCard handleClick={jest.fn} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
