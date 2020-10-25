import React from "react";



import "./transaction.css";

const Transaction = ({transaction , figure}) => {
  
  const chartUrl = 'https://res.cloudinary.com/evergreenx/image/upload/v1603661079/chart_xh6can.svg';
  return (
<section className="wrap">
    <div className="wrapItems">
      <h4>{transaction}</h4>
      <p>{figure}</p>
    </div>
    <div className="wrapItems">
      <img src={chartUrl} alt="chart" />
    </div>
  </section>
  )
  
};

export default Transaction;
