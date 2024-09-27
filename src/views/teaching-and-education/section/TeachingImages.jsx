import { Col, CustomButton, Row } from "components/common";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TeachingBgIcon from "assets/svg/teaching-bg-image.svg";
import SmarteachIcon from "assets/images/smarteach-laptop.png";

const TeachingImages = () => {
  const copilotRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = copilotRef.current.querySelectorAll(
      ".copilot-header, .copilot-btn"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={copilotRef}>
      <Row gutter={[20, 0]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="copilot-section">
            <div
              className="image-section"
              style={{
                backgroundImage: `url(${TeachingBgIcon})`,
              }}
            >
              <div className="copilot-header">
                Be the <span className="first"> first</span> to try it out
              </div>
              <div className="copilot-btn">
                <CustomButton title={"Join Waitlist"} />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="screen-section">
            <div
              className="screen-image-section"
              style={{
                backgroundImage: `url(${SmarteachIcon})`,
              }}
            ></div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default TeachingImages;

const slideInLeft = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Wrapper = styled.div`
  ${slideInLeft}
  padding: 30px 50px 40px 50px;
  .copilot-section {
    background-color: #2c4d76;
    border-radius: 4px;
  }
  .image-section {
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 45px;
    height: 530px;
  }

  .copilot-header,
  .copilot-btn {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .copilot-header.animate,
  .copilot-btn.animate {
    animation: slideInLeft 1s forwards;
  }
  .copilot-header {
    color: #fff;
    font-size: 36px;
    font-weight: 500;
    max-width: 300px;
    line-height: 47px;
    text-transform: capitalize;
  }
  .first {
    color: #7c98bb;
  }
  .copilot-btn {
    margin-top: 20px;
  }

  .screen-section {
    background-color: #7c98bb;
    border-radius: 4px;
  }
  .screen-image-section {
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    height: 530px;
  }
  @media (max-width: 992px) {
    .screen-section {
      margin-top: 40px;
    }
    .copilot-header {
      text-align: center;
      max-width: 100%;
    }
    .copilot-btn {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    padding: 25px;
    .image-section {
      padding: 65px 35px 35px 35px;
    }
  }
  @media (max-width: 500px) {
    .screen-image-section,
    .image-section {
      height: 400px;
    }
    .copilot-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
