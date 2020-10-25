import React from "react";


import "./transaction.css";

const Transaction = ({transaction , figure}) => {
  
  return (
<section className="wrap">
    <div className="wrapItems">
      <h4>{transaction}</h4>
      <p>{figure}</p>
    </div>
    <div className="wrapItems">
      <img src="../../../public/chart.svg" alt="" />
    </div>
  </section>
  )
  
};

export default Transaction;
