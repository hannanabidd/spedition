import React from "react";
import { Table, Space } from "antd";
import { Link } from "react-router-dom";
import Eye from "../../assets/eye.svg";
import Delete from "../../assets/delete.svg";

const { Column } = Table;

const LastOrderTable = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `pending`,
      order: i,
      age: 32,
      address: `London, ${i}`,
    });
  }
  return (
    <div>
      <Table
        // rowSelection={rowSelection}
        dataSource={data}
        pagination={{
          data,
        }}
      >
        <Column title="Status" dataIndex="name" key="name" />
        <Column title="Order No" dataIndex="order" key="date" />
        <Column title="Departure" dataIndex="address" key="group" />
        <Column title="Target" dataIndex="age" key="group" />
        <Column title="Destination" dataIndex="address" key="group" />
        <Column title="Price" dataIndex="age" key="group" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Link to="">
                <img src={Eye} alt="eye" />
              </Link>
              <img src={Delete} alt="eye" />
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default LastOrderTable;
