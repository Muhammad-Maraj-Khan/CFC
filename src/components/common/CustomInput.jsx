import { Input } from "antd";
import React from "react";
import styled from "styled-components";

export const CustomInput = ({
  placeholder,
  width,
  className,
  onChange,
  value,
  prefix,
  disabled,
  onBlur,
  type = "text",
}) => {
  return (
    <Wrapper>
      <Input
        disabled={disabled}
        onBlur={onBlur}
        prefix={prefix}
        type={type}
        value={value}
        onChange={onChange}
        allowClear
        className={`${className} custom-input`}
        placeholder={placeholder}
        style={{
          width: width,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .custom-input {
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    height: 38px;
    background-color: #fff;
    color: #2e2e2e;
  }
  .ant-input {
    background-color: #fff;
    color: #2e2e2e;
    padding-top: 3px !important;
    font-size: 16px;
  }
  .ant-input::placeholder {
    color: #2e2e2e;
    opacity: 0.6;
    font-weight: 500;
  }
  .ant-input-prefix {
    margin-right: 7px;
  }
`;
