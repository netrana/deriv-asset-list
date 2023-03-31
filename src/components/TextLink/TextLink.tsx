import React, { FC, MouseEventHandler } from "react";
import { Typography } from "antd";
import classNames from "classnames";

import { Props } from "./types";

import styles from "./textLink.module.scss";


const TextLink: FC<Props> = (props) => {
  const { children, onClick, className = ''} = props;
  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div
      className={classNames({
        [styles.textLink]: true,
        [className]: Boolean(className),
      })}
      onClick={handleClick}
    >
      <Typography.Text className={styles.text}>{children}</Typography.Text>
    </div>
  );
};

export default TextLink;
