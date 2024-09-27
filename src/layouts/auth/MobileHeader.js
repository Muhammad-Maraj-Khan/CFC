import { CustomButton } from "components/common";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDownBlackIcon from "assets/svg/arrow-down-black-bold.svg";
import ArrowUpBlackIcon from "assets/svg/arrow-up.svg";
import CrossIcon from "assets/svg/cross-icon.svg";
import JanusBlackIcon from "assets/svg/Janus-logo-black.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MobileHeader = ({ menuItem, onClose, scrollToTop }) => {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (id) => {
    setSelectedOption((prevSelectedOption) =>
      prevSelectedOption === id ? null : id
    );
  };

  return (
    <Wrapper>
      <div className="mobile-header">
        <div>
          <img
            src={JanusBlackIcon}
            className="janus-icon"
            onClick={() => history.push("/")}
          />
        </div>
        <div>
          <img src={CrossIcon} className="cross-icon" onClick={onClose} />
        </div>
      </div>
      <div className="mobile-section">
        <div>
          {menuItem?.map((el) => {
            return (
              <div className="menu-submenu-section" key={el?.id}>
                <div
                  className={`mobile-menu-section ${
                    selectedOption === el.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    handleItemClick(el.id);
                  }}
                >
                  <div
                    className={`mobile-menu-text ${
                      selectedOption === el.id ? "selected" : ""
                    }`}
                  >
                    {el?.title}
                  </div>
                  {/* {selectedOption === el.id ? (
                  <img src={ArrowDownWhiteIcon} className="arrow-down" />
                ) : ( */}
                  {selectedOption === el.id ? (
                    <img src={ArrowUpBlackIcon} className="arrow-down" />
                  ) : (
                    <img src={ArrowDownBlackIcon} className="arrow-down" />
                  )}

                  {/* )} */}
                </div>
                {selectedOption === el.id && (
                  <div className="mobile-submenu-container">
                    {el.submenu?.map((sub) => (
                      <div
                        key={sub.id}
                        className="mobile-submenu-item"
                        onClick={() => {
                          history.push(sub.path);
                          onClose();
                          scrollToTop();
                        }}
                      >
                        {sub.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          className="header-btn"
          onClick={() => {
            scrollToTop();
            onClose();
          }}
        >
          <CustomButton
            title="Contact Us"
            className={"mobile-btn"}
            width={"100%"}
            link={"/contact-us"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileHeader;

const Wrapper = styled.div`
  .mobile-header {
    padding-bottom: 10px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .mobile-section {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .menu-submenu-section {
    padding: 15px 0px;
    border-bottom: 1px solid #e6e6e6;
  }
  .mobile-menu-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 8px 0px; */
    cursor: pointer;
    gap: 10px;
    transition: background-color 0.3s;
  }
  /* .mobile-menu-section.selected {
    background-color: #00b840;
  } */
  .mobile-menu-text {
    color: #000;
    font-size: 16px;
    font-weight: 500;
  }
  /* .mobile-menu-text.selected {
    color: #fff;
  } */
  /* .arrow-down {
    margin-top: 4px;
  } */
  .header-btn .mobile-btn {
    background-color: #00b840;
    color: #fff;
  }

  .mobile-btn:hover {
    background: #244a32;
    color: #fff;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
  }
  .mobile-submenu-container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mobile-submenu-item {
    color: #2e2e2e;
    font-size: 14px;
    cursor: pointer;
  }
`;
