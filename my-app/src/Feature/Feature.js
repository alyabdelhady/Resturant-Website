import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <div className="feature">
      <div class="container">
        <div className="feature-part">
          <h1>
            OUR SOME FEATURE <hr />
          </h1>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-xs-12">
              <img className="img-feature" src="/img-icon/16.png" alt="" />
              <h3>Fresh Dishes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius-
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <img className="img-feature" src="/img-icon/13.png" alt="" />
              <h3>Various Menu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius-
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <img className="img-feature" src="/img-icon/14.png" alt="" />
              <h3>Well Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius-
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <img className="img-feature" src="/img-icon/15.png" alt="" />
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius-
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
