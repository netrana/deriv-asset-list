import React from "react";
import render from "react-test-renderer";

import RadioButton from "../RadioButton";

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Radio: {
    Group: "RadioGroup",
  },
  Typography: {
    Text: "Text",
  },
}));

describe("RadioButton component test", () => {
  describe("snapshot", () => {
    it("should match snapshot without title", () => {
      const tree = render
        .create(
          <RadioButton
            options={[
              {
                value: "1",
                label: "Option 1",
              },
            ]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot with title", () => {
      const tree = render
        .create(
          <RadioButton
            options={[
              {
                value: "1",
                label: "Option 1",
              },
            ]}
            title="Test Title"
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
