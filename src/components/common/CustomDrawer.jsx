import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";
import styled from "styled-components";

export const CustomDrawer = ({
  children,
  title,
  placement,
  onClose,
  visible,
  width,
  height,
  closable,
}) => {
  return (
    <Wrapper>
      <Drawer
        title={title}
        closable={closable}
        placement={placement}
        onClose={onClose}
        visible={visible}
        key={placement}
        width={width}
        height={height}
      >
        {children}
      </Drawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-drawer-header {
    background-color: red !important;
  }
`;
