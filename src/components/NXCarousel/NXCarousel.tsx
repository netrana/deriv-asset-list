import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { FC } from "react";

import { Props } from "./types";

const NXCarousel: FC<Props> = (props) => {
  const { children, totalCount = 0 } = props;

  return (
    <Carousel
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
      dots={false}
      arrows={true}
      infinite={totalCount >  4}
      speed={500}
      slidesToShow={4}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: totalCount >  4,
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            infinite: totalCount >  2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: totalCount >  1,
          }
        }
      ]}
    >
      {children}
    </Carousel>
  );
};

export default NXCarousel;
