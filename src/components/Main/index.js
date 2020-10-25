import React from "react";
import TransactionCard from "../Transaction/index";
import SideNav from "../SideNav/index";
import TrackRecord from "../trackRecord/index";
import TableData from "../tableData/index";



import "./main.css";
const MainContainer = () => {
  const bigChartUrl =
    "https://res.cloudinary.com/evergreenx/image/upload/v1603661079/biggraph_eqcjmt.svg";

 

  return (
    <section className="container">
      <div className="containerBoxes  box1">
        <SideNav />
      </div>
      <div className="containerBoxes box2">
        <div className="box2__topChart">
          <div className="topChart--items">
            <TransactionCard
              transaction="Daily Transaction Volume"
              figure="2,342"
            />
          </div>
          <div className="topChart--items">
            <TransactionCard
              transaction="Daily Transaction Value"
              figure="₦4,000,000"
            />
          </div>
          <div className="topChart--items">
            <TransactionCard
              transaction="Total Transaction Volume"
              figure="452,000"
            />
          </div>
          <div className="topChart--items">
            <TransactionCard
              transaction="Daily Transaction Value"
              figure="₦4,000,000"
            />
          </div>
        </div>
        <div className="chart">
          <div className="chart__items chart--area">
            <div className="chart_data">
              <span>Today: 5, Aug 2018</span>

              <div className="dropdown">
                <select>
                  <option> 1 Jan - 1 Jun </option>
                </select>

                <button>&lt;</button>

                <button>&gt;</button>
              </div>
            </div>

            <div className="months">
              <span>Jan</span>
              <span>Feb</span>
              <span>mar</span>
              <span>Apr</span>
              <span>may</span>

              <span>jun</span>
            </div>
            <img src={bigChartUrl} alt="bigchart" />
          </div>
          <div className="chart__items right-record">
            <TrackRecord
              heading="Orders"
              textOne="Pending Orders:"
              textTwo="Reconcilled Orders:"
              textThree="Total Orders:"
            />
            <TrackRecord
              heading="Payments"
              textOne="Un-reconcilled Payments:"
              textTwo="Reconcilled Payments:"
              textThree="Total Payments:"
            />
          </div>
        </div>
        <h2>Payments</h2>
        <div className="table-data">

        <TableData/>
      
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
