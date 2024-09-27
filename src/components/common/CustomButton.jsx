import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const CustomButton = ({
  className,
  title,
  width,
  htmlType,
  icon,
  loading,
  link,
  onClick,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <Wrapper>
      <Button
        loading={loading}
        icon={icon}
        htmlType={htmlType}
        className={` ${className} btn `}
        style={{ width: width }}
        onClick={link ? handleClick : onClick}
      >
        {title}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: #2e2e2e;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    height: auto;
    box-shadow: none;
  }
  .white:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
    color: #fff;
  }
  .green:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
    color: #fff;
  }
  .lightgreen:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
    color: #fff;
  }
    .center{
    align-self:center;
    }
  @media (max-width: 500px) {
    width: 100%;
    .btn {
      width: 100%;
    }
  }
`;
