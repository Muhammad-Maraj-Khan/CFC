import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SuccessIcon from "assets/svg/success-img.svg";
import SuccessMobileIcon from "assets/svg/success-mobile.svg";
import { CustomButton } from "components/common";

const Success = () => {
  const copilotRef = useRef(null);

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
      <div className="copilot-section">
        <div className="image-section">
          <div className="bank-text-section">
            South African Development Bank
          </div>
          <div className="copilot-header">
            “The evaluation of the Theory of Change is very detailed and
            informative. The tools allow for a quick assessment, especially in
            cases of glaring errors or omissions. Overall, Climate Finance
            Copilot can be very beneficial, especially when dealing with large
            volumes of concept note submissions.”
          </div>
          <div className="copilot-btn" onClick={scrollToTop}>
            <CustomButton
              link={"/success-stories"}
              title={"Read Success Stories"}
              className={"white"}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Success;

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
  background: #fff;
  /* margin-top: 90px; */
  padding: 60px 50px 40px 50px;
  .copilot-section {
    background-color: #244a32;
    border-radius: 5px;
    height: 700px;
  }
  .image-section {
    background-image: url(${SuccessIcon});
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 45px;
    height: 700px;
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
    max-width: 1000px;
    line-height: 47px;
    margin-top: 35px;
  }

  .copilot-btn {
    margin-top: 40px;
  }
  .bank-text-section {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
  }
  @media (max-width: 992px) {
    .copilot-header {
      text-align: center;
      max-width: 100%;
    }
    .copilot-btn {
      display: flex;
      justify-content: center;
    }
    .image-section {
      height: 100%;
      padding-bottom: 220px;
      background-image: url(${SuccessIcon});
    }
    .copilot-section {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 60px 25px 25px 25px;
    margin-top: 0px;
    .image-section {
      padding: 65px 10px 220px 10px;
    }
    .bank-text-section {
      font-size: 20px;
      text-align: center;
    }

    .copilot-header {
      font-size: 18px;
      line-height: 35px;
    }
  }

  @media (max-width: 500px) {
    .copilot-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
