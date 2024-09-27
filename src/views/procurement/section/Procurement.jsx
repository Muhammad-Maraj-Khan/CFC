import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Empowering = () => {
  const janusRef = useRef(null);

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

    const elements = janusRef.current.querySelectorAll(
      ".janus-header, .janus-text"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={janusRef}>
      <div className="Janus-container">
        <div className="janus-header">Procurement Made Easy</div>
        <div className="janus-text">
          We leverage AI to develop tailored web-based software solutions that
          streamline procurement processes, mitigate risks, and optimize
          resource allocation. Our AI-Powered Solutions for Procurement contain
          the following features:
        </div>
      </div>
    </Wrapper>
  );
};

export default Empowering;

const slideInBottom = `
  @keyframes slideInBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Wrapper = styled.div`
  ${slideInBottom}
  padding: 0px 50px;
  padding-top: 60px;
  padding-bottom: 40px;
  .Janus-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .janus-header,
  .janus-text {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .janus-header.animate,
  .janus-text.animate {
    animation: slideInBottom 1s forwards;
  }
  .janus-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 65px;
  }
  .janus-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    max-width: 635px;
    margin-top: 10px;
    line-height: 27px;
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
    padding-top: 40px;
    padding-bottom: 30px;
    .Janus-container {
    }
    .janus-header {
      font-size: 35px;
      line-height: 50px;
      text-align: center;
      width: 100%;
    }
    .janus-text {
      text-align: center;
    }
  }
`;
