import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Col, CustomButton, Row } from "components/common";
import ClimateImage from "assets/svg/cliamate-finance-banner.svg";
import ReadSuccessBtn from "assets/svg/new-read-success.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ClimateFunding = () => {
  const history = useHistory();

  // const climateRef = useRef(null);
  // const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect(() => {
  //   if (hasAnimated) return; // If already animated, do not set up observer

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate");
  //           setHasAnimated(true); // Mark as animated
  //           observer.disconnect(); // Disconnect observer after animation
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );

  //   const elements = climateRef.current.querySelectorAll(
  //     ".climate-sub-header, .climate-header, .climate-desc, .login, .started-btn"
  //   );
  //   elements.forEach((el) => observer.observe(el));

  //   return () => {
  //     if (observer) observer.disconnect(); // Clean up observer on component unmount
  //   };
  // }, [hasAnimated]);

  return (
    <Wrapper
    //  ref={climateRef}
    >
      <div className="climate-funding-container">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Row>
              <Col
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="header-col"
              >
                <div>
                  <div className="climate-sub-header">Climate Finance</div>
                  <div className="climate-header">
                    Climate Funding Made Easy
                  </div>
                </div>
              </Col>
              <Col
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="desc-login-col"
              >
                <div className="desc-login-section">
                  <div className="climate-desc">
                    Climate Finance Copilot is the all in one solution to help
                    you start winning climate funding for your most important
                    projects.
                  </div>
                  <div className="login-btn-section">
                    {/* <img
                      src={ReadSuccessBtn}
                      className="new-read-success-btn"
                      onClick={() => {
                        history.push("/success-stories");
                      }}
                    /> */}
                    <div className="climate-btn">
                      <CustomButton
                        link={"/success-stories"}
                        title="Read Success Stories"
                        className="started-btn"
                      />
                    </div>
                    <div
                      className="login"
                      onClick={() => {
                        history.push("/request-a-demo");
                      }}
                    >
                      Request a Demo
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="img-col">
            <img src={ClimateImage} className="climate-img" />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default ClimateFunding;

// const fadeIn = `
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

const Wrapper = styled.div`
  padding: 70px 50px 0px 50px;
  background-color: #d9ffe6;
  /* .climate-funding-container {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }
  .climate-sub-header {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }
  .climate-header {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
  }
  .climate-desc {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1.5s;
  }
  .login {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 2s;
  }
  .started-btn {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 2.5s;
  } */

  .new-read-success-btn {
    width: 45%;
    cursor: pointer;
  }
  .climate-btn {
    img {
      width: 100%;
    }
  }
  .started-btn:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
  }
  .climate-sub-header {
    color: #244a32;
    font-size: 14px;
    font-weight: 400;
  }
  .climate-header {
    color: #244a32;
    font-size: 72px;
    font-weight: 600;
    line-height: 85px;
    max-width: 600px;
    margin-left: -3px;
  }
  .desc-login-col {
    display: flex;
    justify-content: center;
  }
  .desc-login-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 38px;
  }
  .climate-desc {
    color: #244a32;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    max-width: 430px;
  }
  .login-btn-section {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  .login {
    color: #244a32;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    /* background-color: #244a32; */
    padding: 8px 16px;
    border-radius: 5px;
  }
  .started-btn {
    background-color: #244a32;
    color: #fff;
    border: 1px solid #244a32;
  }
  .img-col {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 500px) {
    .img-col {
      display: none;
    }
  }
  .climate-img {
    width: 85%;
    object-fit: cover;
  }
  @media (max-width: 1250px) {
    .climate-header {
      font-size: 55px;
      line-height: 65px;
    }
  }
  @media (max-width: 992px) {
    padding-bottom: 60px;
    .header-col {
      display: flex;
      justify-content: center;
    }
    .new-read-success-btn {
      width: 60%;
    }
    .climate-sub-header {
    }
    .climate-header {
      text-align: center;
      margin-left: 0px;
    }
    .climate-desc {
      text-align: center;
    }
    .climate-sub-header {
      text-align: center;
      font-weight: 400;
    }
    .login-btn-section {
      flex-direction: column;
    }
    .desc-login-section {
      margin-top: 20px;
    }
  }
  @media (max-width: 768px) {
    padding: 40px 25px 50px 25px;
  }
  @media (max-width: 500px) {
    .climate-header {
      font-size: 40px;
      line-height: 55px;
    }
    .climate-sub-header {
      text-align: center;
    }
    .climate-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
