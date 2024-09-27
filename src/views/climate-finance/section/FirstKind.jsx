import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const FirstKind = () => {
  const firstKindRef = useRef(null);

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

    const elements = firstKindRef.current.querySelectorAll(
      ".janus-header, .janus-text"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={firstKindRef}>
      <div className="Janus-container">
        <div className="janus-header">The First of It’s Kind</div>
        <div className="janus-text">
          Our AI solutions empower climate finance professionals to work
          smarter, not harder, by automating routine tasks, improving the
          quality of project proposals, and ensuring alignment with climate
          goals. By embracing the power of AI, organizations can accelerate the
          flow of climate finance and drive meaningful action to address the
          global climate crisis.
        </div>
      </div>
    </Wrapper>
  );
};

export default FirstKind;

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
  padding-top: 50px;
  padding-bottom: 50px;
  .Janus-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-bottom: 10px;
  }
  .janus-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    max-width: 700px;
    margin-top: 10px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
    padding-top: 40px;
    padding-bottom: 30px;
    .Janus-container {
    }
    .janus-header {
      font-size: 35px;
      text-align: center;
    }
  }
`;
