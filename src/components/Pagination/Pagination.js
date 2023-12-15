import React from "react";
import { Pagination } from "antd";

const CustomPagination = ({
  defaultCurrent = 1,
  total,
  perPage,
  onPageChange,
}) => {
  return (
    <Pagination
      defaultCurrent={defaultCurrent}
      pageSize={perPage}
      total={total}
      onChange={onPageChange}
    />
  );
};
export default CustomPagination;
