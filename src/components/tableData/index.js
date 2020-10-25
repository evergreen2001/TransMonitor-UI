import React from "react";

//forminput import
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import "./tabledata.css";

const Tabledata = () => {
  return (
    <div>


      <div className="payment_top">
      <span>showing 20
         <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        > 
          <path d="M8 1L4.5 5L1 1" stroke="#1875F0" />
        </svg>
          out of 500 Payment</span>
        <form className="Form">
          <div className="search">
            <SearchIcon className="Icon" />
            <InputBase
              className="input_table"
              placeholder="Search Payment..."
            />
          </div>
        </form>
        
        <div class="select-wrapper">
          Show
          <select class="select">
            <option>All</option>
            <option>Reconcilled</option>
            <option>Un-reconcilled</option>
            <option>Settled</option>
            <option>Unsettled</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item type</th>

            <th></th>
            <th></th>

            <th>Price</th>

            <th>Transaction no</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon"></div>
                <span>pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon_orange"></div>
                <span className="text_orange">pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon"></div>
                <span>pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon"></div>
                <span>pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon_orange"></div>
                <span className="text_orange">pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon_grey"></div>
                <span className="text_grey">pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon"></div>
                <span>pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon_grey"></div>
                <span className="text_grey">pending</span>
              </div>
            </td>
          </tr>

          <tr>
            <td data-column="avatar">
              <div class="circle">
                <div class="content">
                  <span>Vw</span>
                </div>
              </div>
            </td>

            <td data-column="item">Apple Mac Book 15” 250 SSD 12GB</td>
            <td></td>

            <td data-column="price">$73430</td>
            <td data-column="phone">1234567890</td>
            <td data-column="Time">12:30</td>
            <td data-column="status">
              <div className="status">
                <div className="icon_orange"></div>
                <span className="text_orange">pending</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagination_content">


<h3>

Showing 1 to 10 of 500 entries
</h3>


<div className="pagination">
  <a href="#">Previoius</a>
  <a href="#" className="active">1</a>
  <a  href="#">2</a>
  
 
  <a href="#">Next</a>
</div>
        </div>
      </div>
  
  );
};

export default Tabledata;
