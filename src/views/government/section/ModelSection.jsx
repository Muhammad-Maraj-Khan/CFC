import { Col, CustomButton, Row } from "components/common";
import React from "react";
import styled from "styled-components";
import PremiseIcon from "assets/svg/premise-model.svg";
import SubscriptionIcon from "assets/svg/subcription-model.svg";

const ModelSection = () => {
  return (
    <Wrapper>
      <Row gutter={[0, 100]}>
        <Col xs={24} lg={24}>
          <Row gutter={[50, 0]}>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col-1"
            >
              <div className="header">Subscription Model</div>
              <div className="content">
                <p>
                  The Software as a Service (SaaS) model might be your most
                  cost-effective option. Janus handles all maintenance,
                  sustainment and upgrades.
                </p>
                <ul>
                  <li>
                    <span className="highlight">Simplified Pricing:</span> In a
                    SaaS model, all development and maintenance costs are
                    bundled into a single fee. This offers cost efficiencies
                    while providing the benefits of a fully customizable
                    solution.
                  </li>
                  <li>
                    <span className="highlight">Free </span> staff training
                    (virtual)
                  </li>
                  <li>
                    Ample user seats:{" "}
                    <span className="highlight">up to 5 internal users</span>
                  </li>
                  <li>
                    <span className="highlight">Cancel </span> at anytime
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="img-col-1">
              <img src={PremiseIcon} alt="Subscription Model" />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={24}>
          <Row gutter={[0, 0]} className="leadership-row">
            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="img-col-2">
              <img src={SubscriptionIcon} alt="On Premise License Model" />
            </Col>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col-2"
            >
              <div className="header-promise">On Premise License Model</div>
              <div className="content">
                <p>
                  On-premise solutions empower enterprises to leverage the power
                  of AI while maintaining control and security over their
                  critical data and processes.
                </p>
                <ul>
                  <li>
                    <span className="highlight">Unmatched Data Security:</span>{" "}
                    Maintain full control over sensitive data within your own
                    secure infrastructure.
                  </li>
                  <li>
                    <span className="highlight">Complete Customization:</span>{" "}
                    Tailor the software to your precise requirements, ensuring a
                    perfect fit for your unique workflows and processes.
                  </li>
                  <li>
                    <span className="highlight">
                      Long-Term Cost Efficiency:
                    </span>{" "}
                    Benefit from a one-time license fee, eliminating recurring
                    subscription costs and providing predictable budgeting for
                    your organization.
                  </li>
                  <li>
                    <span className="highlight">
                      Full Ownership and Control:
                    </span>{" "}
                    Own the software outright; allowing for unrestricted use and
                    customization without vendor limitations.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ModelSection;

const Wrapper = styled.div`
  padding: 130px 50px 0px 50px;
  @media (max-width: 768px) {
    padding: 50px 25px;
  }

  .context-col-1 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    padding: 0 100px;
    @media (max-width: 768px) {
      padding: 0;
      text-align: start;
      justify-content: start;
      align-items: start;
    }
  }
  .context-col-2 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    padding-left: 100px;
    @media (max-width: 1000px) {
      padding: 0;
      padding-left: 0px;
      text-align: start;
      justify-content: start;
      align-items: start;
    }
    @media (max-width: 768px) {
      padding: 0;
      text-align: start;
      justify-content: start;
      align-items: start;
    }
  }

  .header {
    color: #000000;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 12px;
    max-width: 350px;
    line-height: 47px;
    @media (max-width: 768px) {
      font-size: 32px;
      max-width: 100%;
      text-align: center;
      width: 100%;
    }
  }

  .header-promise {
    color: #000000;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 12px;
    max-width: 400px;
    line-height: 47px;
    @media (max-width: 768px) {
      font-size: 32px;
      max-width: 100%;
      text-align: center;
      width: 100%;
    }
  }

  .content {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
    ul {
      list-style-type: disc;
      padding-left: 20px;
      li {
        margin-bottom: 20px;
      }
    }
  }

  .highlight {
    font-weight: 600;
  }

  .img-col-1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      width: 50%;
      @media (max-width: 768px) {
        max-width: 50%;
        height: auto;
      }
    }
  }
  .img-col-2 {
    margin-bottom: 20px;
    text-align: center;
    img {
      width: 50%;
      @media (max-width: 768px) {
        max-width: 50%;
        height: auto;
      }
    }
  }

  .leadership-row {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 1200px) {
    .header,
    .header-promise {
      max-width: 100%;
      text-align: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .img-col-1 {
      margin-top: 60px;
    }
    .leadership-row {
      flex-direction: column-reverse;
    }
    .context-col-2 {
      padding-left: 0px;
    }
    .img-col-2 img {
      width: auto;
    }
  }
`;
