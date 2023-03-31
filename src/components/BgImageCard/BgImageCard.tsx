import React, { FC } from "react";
import classNames from "classnames";
import Button from "components/Button";

import styles from "./bgImageCard.module.scss";
import { Props } from "./types";

const BgImageCard: FC<Props> = (props) => {
  const {
    title,
    className = "",
    buttonText = "Browse Cars",
    handleClick,
  } = props;
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles.carBrowse]: true,
        [className]: Boolean(classNames),
      })}
    >
      <div className={styles.title}>{title}</div>
      {buttonText || buttonText !== "" ? (
        <Button className={styles.browseButton} onClick={handleClick}>
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
};

export default BgImageCard;
