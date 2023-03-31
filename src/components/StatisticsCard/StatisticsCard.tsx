import React, { FC } from "react";
import classNames from "classnames";

import { Props } from "./types";
import styles from "./statisticsCard.module.scss";
import NXCard from "components/NXCard";

const StatisticsCard: FC<Props> = (props) => {
  const { title, children, className = "", isActive } = props;
  return (
    <NXCard
      metaTitle={title}
      cssClassNames={classNames({
        [styles.statisticsCard]: true,
        [styles.active]: isActive,
        [className]: Boolean(className),
      })}
    >
      {children}
    </NXCard>
  );
};

export default StatisticsCard;
