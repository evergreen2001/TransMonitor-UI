import React from 'react';
import Button from '../Button/index'

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SettingsInputSvideoIcon from "@material-ui/icons/SettingsInputSvideo";

import './sidenav.css'
const Sidenav = () => {
    return ( 

        <aside className="sideBarContainer">
        <Button/>
        <h4>Main</h4>
        <p className="active">
          <span className="icons">
            <SettingsInputSvideoIcon />
          </span>
          Overview
        </p>
        <h4>Payments</h4>
        <ul>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            All Payments
          </li>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            Reconcilled Payments
          </li>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            Un-reconcilled Payments
          </li>
          <li>
            <span className="icons">
              <RadioButtonCheckedIcon />
            </span>
            Manual Settlement
          </li>
        </ul>
        <h4>Orders</h4>
        <ul>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            All Orders
          </li>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            Pending Orders
          </li>
          <li>
            <span className="icons">
              <EventNoteIcon />
            </span>
            Reconcilled orders
          </li>
        </ul>
        <p className="lastParagraph">
          <span className="icons">
            <PersonOutlineIcon />
          </span>
          Merchant Profile
        </p>
      </aside>

     );
}
 
export default Sidenav;