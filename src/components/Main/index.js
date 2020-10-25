import React from "react";
import TransactionCard from '../Transaction/index'
import SideNav from "../SideNav/index";
import TrackRecord from "../trackRecord/index";


import './main.css'
const MainContainer = () => {
    return (
      <section className="container">
        <div className="containerBoxes  box1">

        <SideNav/>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo minus
              eligendi dignissimos. Facilis officia dolores ut, eos esse, voluptas
              repellat ab tenetur eaque ad maxime necessitatibus quam, expedita
              quisquam commodi?
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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, neque vero velit atque tempora id rem beatae distinctio eos, modi cupiditate asperiores nobis accusantium esse nesciunt ea assumenda repudiandae commodi.
          </div>
        </div>
      </section>
    );
  };

  export default MainContainer