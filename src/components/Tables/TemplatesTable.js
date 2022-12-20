import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import Eye from "../../assets/eye.svg";
import Delete from "../../assets/delete.svg";

const { Column } = Table;

const TemplatesTable = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Germany`,
      order: i,
      date: "02/18/22, 21:56",
      edit: "12/18/22, 02:20",
      term: "hello world",
      address: `London, ${i}`,
      tags: ["INVOICE", "SHIPPING"],
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
        scroll={{ x: 800 }}
      >
        <Column title="Designation" dataIndex="name" key="name" />
        <Column title="Created on" dataIndex="date" key="date" />
        <Column title="Edited on" dataIndex="edit" key="group" />
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

export default TemplatesTable;
