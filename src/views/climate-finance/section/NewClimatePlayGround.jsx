import { CustomButton } from "components/common";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PlayGroundImg from "assets/images/Laptop-Playground(Cut).png";
import CfcBfIcon from "assets/svg/playground-cfc-svg.svg";
import PlaygroundCard from "./PlaygroundCard";

const NewClimatePlayGround = () => {
  const solutionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

    const elements = solutionRef.current.querySelectorAll(
      ".solution-header, .solution-desc, .solution-btn"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={solutionRef}>
      <div className="solution-container">
        <div className="cfc-bg">
          <div className="solution-header">
            Climate Finance ”Playground” is here
          </div>
          <div className="solution-desc">
          Playground is built specifically for climate finance professionals. Where GPT-4 fails short, our solution excels! It grants you unparalleled capabilities including access to the datasets you need to draft compelling and compliant narratives essential for funding success. Follow these 3 simple steps to understand how it works: 
          </div>
          <PlaygroundCard/>
          <div className="solution-btn" onClick={scrollToTop}>
            <CustomButton
              title="Request a Demo"
              link={"/request-a-demo"}
              className={"white"}
              
            />
          </div>
          <div className="solution-card-section">
            <img src={PlayGroundImg} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewClimatePlayGround;

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
  padding: 50px 50px 0px 50px;
  margin-top: 90px;
  background-color: #fff;
  .cfc-bg {

  }
  .solution-container {
    background-color: #244a32;
    border-radius: 5px;
    padding: 60px 60px 0px 45px;
  }
  .solution-header,
  .solution-desc,
  .solution-btn {
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .solution-header.animate,
  .solution-desc.animate,
  .solution-btn.animate {
    animation: slideInLeft 1s forwards;
  }
  .solution-header {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
  }
  .solution-desc {
    color: #ffffffe5;
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
    max-width: 790px;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .solution-btn {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    align-item: center;
    justify-content: center;
  }
  .solution-btn .btn {
    font-weight: 600;
  }
  .solution-card-section {
    padding-right: 25px;

    img {
      width: 100%;
      height: 640px;
      object-fit: contain;
    }
  }
  @media (max-width: 1160px) {
    .solution-card-section {
      img {
        height: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 80px 25px 25px 25px;
    margin-top: 0px;
    .solution-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 25px 0px 25px;
    }
    .solution-header {
      text-align: center;
      line-height: 40px;
      font-size: 30px;
      padding-right: 25px;
    }
    .solution-desc {
      text-align: center;
      margin-top: 30px;
      padding-right: 25px;
    }
    .solution-btn {
      margin-top: 30px;
      padding-right: 0px;
    }
    .solution-card-section {
      margin-top: 40px;
      padding-right: 15px;

      img {
        height: 100%;
      }
    }
  }
  @media (max-width: 500px) {
    .solution-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
