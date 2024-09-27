import { CustomButton } from "components/common";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SolutionCardsSection from "./SolutionCardsSection";

const SolutionForAll = () => {
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
        <div className="solution-header">
          Solutions for all your funding needs
        </div>
        <div className="solution-desc">
          Whether its drafting a concept note from scratch or evaluating what
          you created, Climate Finance Copilot has all the functions you need to
          create a winning proposal.
        </div>
        {/* <div className="solution-btn" onClick={scrollToTop}>
          <CustomButton title="Request a Demo" link={"/request-a-demo"} className={"white"}/>
        </div> */}
        <div className="solution-card-section">
          <SolutionCardsSection />
        </div>
      </div>
    </Wrapper>
  );
};

export default SolutionForAll;

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
  padding: 0px 50px;
  .solution-container {
    background-color: #244a32;
    border-radius: 5px;
    padding: 60px 45px 40px 45px;
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
    text-transform: capitalize;
  }
  .solution-desc {
    color: #ffffffe5;
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
    max-width: 650px;
    line-height: 28px;
  }

  .solution-btn {
    margin-top: 15px;
  }
  .solution-btn .btn {
    font-weight: 600;
  }
  .solution-card-section {
    margin-top: 55px;
  }
  @media (max-width: 768px) {
    padding: 0px;
    .solution-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0px;
      padding: 25px;
    }
    .solution-header {
      text-align: center;
      line-height: 40px;
      font-size: 30px;
    }
    .solution-desc {
      text-align: center;
      margin-top: 30px;
    }
    .solution-btn {
      margin-top: 30px;
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
