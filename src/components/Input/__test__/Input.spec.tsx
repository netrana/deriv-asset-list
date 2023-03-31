import render from "react-test-renderer";
import Input from "../Input";

describe("Input component test", () => {
  describe("snapshot", () => {
    it("should match snapshot with default props", () => {
      const tree = render.create(<Input />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot with label", () => {
      const tree = render.create(<Input label="Test" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot for password type", () => {
      const tree = render
        .create(<Input label="Test" inputType="password" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
