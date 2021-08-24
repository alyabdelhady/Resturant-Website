import React from "react";

import "./ReservationHome.css";

function ReservationHome() {
  return (
    <div className="parent-reserve">
      <div className="reserve-home">
        <div className="reserve-head">
          <h1 className="h-reserve"># ENJOY TOGETHER</h1>
        </div>
      </div>
      <div className="reserve-partition">
        <h1>Reservation</h1>
        <hr />
        <div className="reserve">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3  col-xs-12">
                <h6>
                  <span>* </span>
                  DATE <span>*</span>
                </h6>
                <input className="reserve-date" type="date" />
              </div>
              <div class="col-lg-3 col-md-3  col-xs-12">
                <h6>
                  <span>* </span>
                  TIME <span>*</span>
                </h6>

                <select className="reserve-time">
                  <option value="1">5:00 PM</option>
                  <option value="2">6:00 PM</option>
                  <option value="3">7:00 PM</option>
                  <option value="4">8:00 PM</option>
                  <option value="5">9:00 PM</option>
                  <option value="6">10:00 PM</option>
                  <option value="7">11:00 PM</option>
                  <option value="8">12:00 PM</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-3  col-xs-12">
                <h6>
                  <span>* </span>
                  PERSON <span>*</span>
                </h6>
                <select className="reserve-person">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guest</option>
                  <option value="3">3 Guest</option>
                  <option value="4">4 Guest</option>
                  <option value="5">5 Guest</option>
                  <option value="6">6 Guest</option>
                  <option value="7">7 Guest</option>
                  <option value="8">8 Guest</option>
                  <option value="9">9 Guest</option>
                  <option value="10">10 Guest</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-3  col-xs-12">
                <h6>
                  <span>* </span>
                  EMAIL ADDRESS <span>*</span>
                </h6>
                <input
                  className="reserve-email"
                  type="email"
                  placeholder="  aly.abdelhady@developer.com"
                />
              </div>
              <div class="col-lg-12  col-xs-12">
                <h6 className="h-massage">
                  <span>* </span>Massage <span>*</span>
                </h6>
                <textarea
                  className="reserve-textarea"
                  placeholder=" Your Massage Must Be More Than 10 Characters And No More Than 50 Characters, Thank You For Under Standing!"
                />
                <button className="reserve-button">BOOK A TABLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationHome;
