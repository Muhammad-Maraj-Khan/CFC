import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import HomeCarouselCard from "./HomeCarousel";

const HomeCarouselSection = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   className: "center",
  //   speed: 500,
  //   slidesToShow: 1.02,
  //   slidesToScroll: 1,
  // };

  return (
    <Wrapper>
      <div className="slider-container">
        <HomeCarouselCard />
      </div>
    </Wrapper>
  );
};

export default HomeCarouselSection;

const Wrapper = styled.div`
  padding: 110px 50px 80px 50px;
  .slick-initialized .slick-slide {
    padding: 0px 27px;
  }
  @media (max-width: 1200px) {
    .slick-initialized .slick-slide {
      padding: 0px 12px;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
    .slick-initialized .slick-slide {
      padding: 0px 5px;
    }
  }
`;
