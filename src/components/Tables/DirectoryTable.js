import React from "react";
import { Table, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import Eye from "../../assets/eye.svg";
import Delete from "../../assets/delete.svg";

const { Column } = Table;

const DirectoryTable = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `pending`,
      order: i,
      age: 32,
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
        <Column title="Company" dataIndex="name" key="name" />
        <Column title="Address" dataIndex="order" key="date" />
        <Column title="The Internal Term" dataIndex="term" key="group" />
        <Column
          title="Address type"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="green" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
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

export default DirectoryTable;
