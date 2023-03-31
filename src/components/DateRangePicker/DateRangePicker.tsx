import React, { FC } from "react";
import { DatePicker, Space } from "antd";
import { RightSquareOutlined, LeftSquareOutlined } from "@ant-design/icons";
import classNames from "classnames";

import styles from "./dateRangePicker.module.scss";
import { Props } from "./types";

const { RangePicker } = DatePicker;

const DateRangePicker: FC<Props> = (props) => {
  const { onChange, className = "" } = props;

  return (
    <Space
      className={classNames({
        [styles.dateRangePicker]: true,
        [className]: Boolean(classNames),
      })}
      direction="horizontal"
      size={12}
    >
      <RangePicker onChange={onChange} />
    </Space>
  );
};

export default DateRangePicker;
