import React from "react";
import MyOrderTable from "../../components/Tables/MyOrderTable";

const MyOrders = () => {
  return (
    <>
      <div className="dashBoardMainPage">
        <h1>My Orders</h1>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table p-[10px]">
              <MyOrderTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
