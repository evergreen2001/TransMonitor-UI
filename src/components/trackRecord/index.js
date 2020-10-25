import React from "react";
import "./trackRecord.css";

const TrackRecord = ({ heading, textOne, textTwo, textThree }) => (
  <section className="trackWrap">
    <h4>{heading}</h4>

    <span className="progressBar"></span>
    <p>
      {textOne} <span className="first">20</span>
    </p>
    <p>
      {textTwo} <span className="second">80</span>
    </p>
    <p>
      {textThree} <span className="third">100</span>
    </p>
  </section>
);

export default TrackRecord;
