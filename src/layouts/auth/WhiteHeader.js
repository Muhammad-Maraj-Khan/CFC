import React, { useState } from "react";
import styled from "styled-components";
import JanusBlackIcon from "assets/svg/Janus-logo-black.svg";
import NewJanusBlackIcon from "assets/images/new-janus-logo-black.png";
import SearchBlackIcon from "assets/svg/search-black.svg";
import { CustomButton, CustomDrawer, CustomInput } from "components/common";
import MobileHeader from "./MobileHeader";
import { useHistory } from "react-router-dom";
import MenuIcon from "assets/svg/menu-black-icon.svg";

export default function WhiteHeader({ scrollToTop }) {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);

  const menuItem = [
    {
      id: 1,
      title: "Company",
      submenu: [
        { id: 1, title: "About Us", path: "/about-us" },
        // { id: 2, title: "Our Team", path: "/our-team" },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      submenu: [
        { id: 1, title: "Climate Finance", path: "/climate-finance" },
        // {
        //   id: 2,
        //   title: "Teaching and Education",
        //   path: "/teaching-and-eduction",
        // },
        { id: 3, title: "Procurement", path: "/procurement" },
        {
          id: 4,
          title: "Disaster Preparedness And Response",
          path: "/disaster",
        },
      ],
    },
    {
      id: 3,
      title: "How to Buy",
      submenu: [
        { id: 1, title: "Pricing Logic", path: "/pricing-logic" },
        // { id: 2, title: "Custom Solutions", path: "/custom-solution" },
      ],
    },
    {
      id: 4,
      title: "Resources",
      submenu: [{ id: 1, title: "FAQs", path: "/faqs" }],
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <div className="header-container">
        <div className="logo-menu-section">
          <div
            onClick={() => {
              scrollToTop();
            }}
          >
            <img
              src={NewJanusBlackIcon}
              className="janus-icon"
              onClick={() => history.push("/")}
            />
          </div>
          {menuItem?.map((el) => (
            <div className="menu-img-section" key={el?.id}>
              <div className="menu-text">{el?.title}</div>
              <div className="submenu-spacer"></div>
              <div className="submenu">
                {el.submenu?.map((sub) => (
                  <div
                    key={sub.id}
                    className="submenu-item"
                    onClick={() => {
                      history.push(sub.path);
                      scrollToTop();
                    }}
                  >
                    {sub.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="search-btn-section">
          <div
            className="header-btn"
            onClick={() => {
              scrollToTop();
            }}
          >
            <CustomButton
              title="Contact Us"
              className="header-button"
              link="/contact-us"
            />
          </div>
          <div className="mobile-menu-icon" onClick={showDrawer}>
            <img src={MenuIcon} className="menu-icon" />
          </div>
        </div>
      </div>

      <CustomDrawer
        placement={"right"}
        closable={false}
        onClose={onClose}
        visible={open}
        key={"bottom"}
        width={"100%"}
        height={"100%"}
        title={null}
      >
        <MobileHeader
          menuItem={menuItem}
          onClose={onClose}
          scrollToTop={scrollToTop}
        />
      </CustomDrawer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 15px 50px;
    background-color: #ffffff;
  }
  .logo-menu-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .janus-icon {
    cursor: pointer;
    width: 120px;
  }
  .menu-img-section {
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
  }
  .menu-text {
    color: #000;
    font-size: 16px;
    transition: color 0.3s ease;
    position: relative;
  }
  .menu-text::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    transition: width 0.3s ease;
    margin-top: 10px; /* Increase margin for underline */
  }
  .menu-img-section:hover .menu-text::after {
    width: 50%;
  }
  .submenu-spacer {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10px; /* Adjust this to the gap size you want */
    background-color: transparent;
    z-index: 9;
  }
  .submenu {
    display: none;
    position: absolute;
    top: calc(100% + 10px); /* Increase space between main item and submenu */
    left: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    white-space: nowrap;
    z-index: 10;
  }
  .menu-img-section:hover .submenu,
  .menu-img-section:hover .submenu-spacer,
  .submenu:hover {
    display: block;
  }
  .submenu-item {
    padding: 10px 20px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .submenu-item:hover {
    background-color: #f0f0f0;
  }
  .search-btn-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .search-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
  .header-button {
    background-color: #00b840;
    border: 1px solid #00b840;
    color: #fff;
  }
  .header-button:hover {
    background: #244a32;
    color: #fff;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
  }
  .mobile-menu-icon {
    display: none;
  }
  @media (max-width: 1150px) {
    .menu-img-section,
    .menu-text {
      display: none;
    }
    .header-btn {
      display: none;
    }
    .mobile-menu-icon {
      display: block;
      cursor: pointer;
    }
    /* .menu-icon {
      font-size: 20px;
      color: #2e2e2e;
    } */
    .search-img {
      margin-top: 4px;
      img {
        width: 23px;
      }
    }
    .search-btn-section {
      height: 39px;
      gap: 15px;
    }
  }
  @media (max-width: 768px) {
    .header-container {
      padding: 25px;
    }
    /* .search-btn-section {
      gap: 12px;
    } */
  }
`;
