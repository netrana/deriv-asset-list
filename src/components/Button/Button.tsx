import React, { FC } from "react";
import { Button as AntdButton, Typography } from "antd";
import classNames from "classnames";

import { onClickHandlerForDisabledState } from "./helpers";

import { Props } from "./types";

import styles from "./button.module.scss";

const Button: FC<Props> = (props) => {
  const {
    children,
    type = "default",
    disabled,
    className = "",
    isBordered = false,
    icon,
    onClick,
    ...otherProps
  } = props;

  return (
    <AntdButton
      icon={icon}
      className={classNames({
        [styles.button]: true,
        [styles.primary]: type === "primary",
        [styles.default]: type === "default",
        [styles.ghost]: type === "ghost",
        [styles["is-bordered"]]: isBordered,
        [styles["is-disabled"]]: disabled,
        [className]: Boolean(classNames),
      })}
      onClick={disabled ? onClickHandlerForDisabledState : onClick}
      {...otherProps}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
