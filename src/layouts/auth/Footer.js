import React from "react";
import styled from "styled-components";
import JanusBlackIcon from "assets/svg/Janus-logo-black.svg";
import LinkedIn from "assets/svg/linked-in.svg";
import Youtube from "assets/svg/you-tube.svg";
import { Link, useHistory } from "react-router-dom";

export default function Footer({ scrollToTop }) {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
    scrollToTop();
  };

  return (
    <Wrapper>
      <div className="footer-content">
        <div className="brand">
          <img
            src={JanusBlackIcon}
            onClick={handleLogoClick}
            className="janus-icon"
          />
          <p className="description">
            An AI oriented consultancy specializing in creating custom software
            solutions for enterprises across the developing world.
          </p>
        </div>
        <div className="links-section">
          <div className="links-column">
            <h3 className="column-title">Company</h3>
            <Link to="/about-us" className="link-item">
              About Us
            </Link>
            {/* <Link to="/our-team" className="link-item">
              Our Team
            </Link> */}
          </div>
          <div className="links-column">
            <h3 className="column-title">Solutions</h3>
            <Link
              to="/climate-finance"
              onClick={scrollToTop}
              className="link-item"
            >
              Climate Finance
            </Link>
            {/* <Link to={"/teaching-and-eduction"}>
              <a href="javascript:void(0)" className="link-item">
                Teaching and Education
              </a>
            </Link> */}
            <Link to={"/procurement"}>
              <a
                onClick={scrollToTop}
                href="javascript:void(0)"
                className="link-item"
              >
                Procurement
              </a>
            </Link>{" "}
            <Link to={"/disaster"}>
              <a href="javascript:void(0)" className="link-item">
                Disaster Preparedness and Response
              </a>
            </Link>
          </div>
          <div className="links-column">
            <h3 className="column-title">How to Buy</h3>
            <Link
              to="/pricing-logic"
              onClick={scrollToTop}
              className="link-item"
            >
              Pricing Logic
            </Link>
            {/* <Link to={"/custom-solution"}>
              <a
                onClick={scrollToTop}
                href="javascript:void(0)"
                className="link-item"
              >
                Custom Solutions
              </a>
            </Link> */}
          </div>
          <div className="links-column">
            <h3 className="column-title">Resources</h3>
            <Link to={"/faqs"}>
              <a
                onClick={scrollToTop}
                href="javascript:void(0)"
                className="link-item"
              >
                FAQs
              </a>
            </Link>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="bottom-bar">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/company/janus-advisory-services/"
            className="social-link"
          >
            <img src={LinkedIn} className="social-icon" />
          </a>
          <a
            href="https://www.youtube.com/@JanusAdvisoryAdmin"
            className="social-link"
          >
            <img src={Youtube} className="social-icon" />
          </a>
        </div>
        <div className="legal-and-copyright">
          <div className="copyright">© 2024 Janus. All rights reserved.</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  padding: 40px 50px;

  /* @media (max-width: 1200px) {
    padding: 40px 60px;
  } */

  /* @media (max-width: 992px) {
    padding: 40px 40px;
  } */

  @media (max-width: 768px) {
    padding: 40px 25px;
  }

  /* @media (max-width: 576px) {
    padding: 40px 20px;
  } */

  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
  }

  .hr-line {
    margin-top: 15px;
  }

  .brand {
    flex: 1;
    min-width: 200px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  .janus-icon {
    max-width: 120px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .description {
    color: #666;
    margin-bottom: 1em;
    margin-top: 10px;
    width: 230px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 576px) {
      width: 100%;
    }
    @media (max-width: 1160px) {
      width: 200px;
    }
  }

  .links-section {
    display: flex;
    justify-content: flex-start;
    flex: 3;
    min-width: 200px;
    gap: 50px;

    @media (max-width: 992px) {
      gap: 50px;
      min-width: 100px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      text-align: start;
      gap: 10px;
    }
  }

  .links-column {
    min-width: 95px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  .column-title {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  .link-item {
    width: 150px;
    display: block;
    color: #2e2e2e;
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 576px) {
      width: 150px;
    }
    @media (max-width: 1160px) {
      width: 115px;
    }
  }

  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 0;
    padding-top: 5px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
      gap: 15px;
    }
  }

  .social-links {
    display: flex;

    @media (max-width: 768px) {
      margin-bottom: 10px;
      gap: 20px;
    }
  }

  .social-link {
    color: #2e2e2e;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      color: #0077b5;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .legal-and-copyright {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .legal-links {
    display: flex;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  .legal-link {
    color: #2e2e2e;
    margin-right: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 32px;
    }
  }

  .copyright {
    color: #2e2e2e;
    font-size: 12px;
    font-weight: 400;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;
