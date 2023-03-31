import render from "react-test-renderer";
import Popover from "../Popover";

describe("Popover component test", () => {
  describe("snapshot", () => {
    it("renders correctly", () => {
      const tree = render
        .create(<Popover content={<div>Test</div>} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
