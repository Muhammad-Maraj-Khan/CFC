import React from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const CustomBreadcrumb = ({ items, className }) => {
  const history = useHistory();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    scrollToTop();
    history.goBack();
  };

  return (
    <StyledBreadcrumb separator="" className={className}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <Link
              to={item.path}
              className={item.label === "Go back" ? "go-link" : "home-link"}
              onClick={item.label === "Go back" ? handleGoBack : handleGoBack}
            >
              {item.icon && (
                <item.icon
                  className={`breadcrumb-icon ${
                    item.label === "Go back"
                      ? "go-back-icon"
                      : item.label === "Home"
                      ? "home-icon"
                      : ""
                  }`}
                />
              )}
              {item.label}
              {item.label !== "Go back" && (
                <RightOutlined className="breadcrumb-icon home-icon" />
              )}
            </Link>
          ) : (
            <>
              {item.icon && <item.icon className="breadcrumb-icon" />}
              {item.label}
            </>
          )}
        </Breadcrumb.Item>
      ))}
    </StyledBreadcrumb>
  );
};

export default CustomBreadcrumb;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin-top: 80px;
  padding: 0px 50px;
  margin-bottom: 70px;
  font-size: 16px;
  display: flex;
  gap: 30px;
  align-items: center;

  .ant-breadcrumb-separator {
    margin: 0 4px;
    font-size: 16px;
    content: ">";
  }

  .ant-breadcrumb-link {
    display: flex;
    align-items: center;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    a {
      display: flex;
      align-items: center;
      color: #000;
      gap: 4px;
      &:hover {
        color: #00b840;
      }

      .go-link {
        &.home-link {
          color: #000;
        }
      }
      &.home-link {
        color: #787676;
        &:hover {
          color: #00b840;
        }
      }
    }

    &:last-child {
      color: #000;
      font-weight: 500;
    }

    .breadcrumb-icon {
      margin-right: 4px;
    }

    .go-back-icon {
      margin-right: 10px;
      color: #000;
    }

    .home-icon {
      margin-left: 30px;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 30px;
    margin-bottom: 55px;
    margin-top: 50px;
    .ant-breadcrumb-link {
      font-size: 14px;
      line-height: 20px;

      a {
        gap: 3px;
      }
    }

    .ant-breadcrumb-separator {
      margin: 0 2px;
      font-size: 14px;
    }

    .breadcrumb-icon {
      &.go-back-icon {
        margin-right: 10px;
      }

      &.home-icon {
        margin-left: 25px;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
    gap: 30px;
    padding: 0 20px;

    .ant-breadcrumb-link {
      font-size: 12px;
      line-height: 18px;

      a {
        gap: 1px;
      }
    }

    .ant-breadcrumb-separator {
      margin: 0 1px;
      font-size: 12px;
    }

    .breadcrumb-icon {
      &.go-back-icon {
        margin-right: 10px;
      }

      &.home-icon {
        margin-left: 30px;
      }
    }
  }
`;
