import { Table } from "antd";
import React from "react";
import styled from "styled-components";

export const CustomTable = ({
  rowSelection,
  className,
  columns,
  tableData,
  pagination,
}) => {
  return (
    <Wrapper>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        className={className}
        pagination={pagination}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-table-thead > tr > th {
    background-color: transparent;
    padding: 12px;
    border-bottom: 1px solid #d8d8d8;
    color: #1e293b;
    font-size: 14px;
    font-weight: 700;
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
    color: #1e293b;
    font-size: 14px;
    font-weight: 400;
    padding: 12px;
  }
`;
