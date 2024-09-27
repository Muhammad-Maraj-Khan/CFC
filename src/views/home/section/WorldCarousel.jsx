import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import DoNotTakeWorld from "./DonotTakeWorld";

const WorldCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="world-desc">
              Using Climate Finance Copilot has significantly streamlined the
              process of evaluating Concept Notes. Traditionally, a team of
              approximately eight people would take about three months to
              complete this task. However, with the tool’s guidance on tailoring
              the content correctly - we can now accomplish the evaluation in
              just a few days.
            </div>
            <div className="world-writer">-GCF Grant Writer</div>
          </div>
          <div>
            <div className="world-desc">
              Climate Finance Copilot allows for quick assessment especially in
              cases where there are glaring errors or omissions. It would be
              wise to have such tools in the initial assessment of concepts and
              maybe in the final stage as well.
            </div>
            <div className="world-writer">-Climate Finance Writer</div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default WorldCarousel;

const Wrapper = styled.div`
  .world-desc {
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .world-writer {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  /* .slick-dots {
    bottom: 75px;
  } */
  .slick-prev,
  .slick-next {
    display: none !important;
  }
  .slick-dots li {
    width: auto;
    height: auto;
  }
  .slick-dots li button {
    width: auto;
    height: auto;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
    color: transparent;
    border: 2px solid #fff;
    width: 13px;
    height: 13px;
    border-radius: 100%;
  }
  .slick-dots li button:before {
    font-size: 9px;
    line-height: 16px;
    opacity: 1;
    color: #fff;
  }

  .slick-dots li:first-child button:before {
    left: 0px;
  }

  .slick-dots li:nth-child(2) button:before {
    left: -5px;
  }
  .slick-dots li.slick-active:nth-child(2) button:before {
    left: 1px;
  }
  @media (max-width: 1200px) {
    .world-desc {
      font-size: 25px;
    }
  }
  /* @media (max-width: 640px) {
    .slick-dots {
      bottom: 25px;
    }
  } */
`;
