import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="parent-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12 ">
            <div className="footer-parts">
              <h6>CONTACT</h6>
              <p>1600 Amphitheatre Parkway Mountain View CA 94043</p>
              <a href="#">aly.abdelhady@developer.com</a>
              <br />
              <a href="#">+201022886619</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12 ">
            <div className="footer-parts">
              <h6>OUR NEWSLETTER</h6>
              <p>Stay always updated with us. Sign in with our newsletter</p>
              <input type="email" />
              <br />
              <button>Subscribe</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12 ">
            <div className="footer-parts">
              <h6>OPENING HOURS</h6>
              <p>Monday – Friday: 9am-6pm</p>
              <p>Saturday: 10am-4pm</p>
              <p>Sunday: 10am-1pm</p>
            </div>
          </div>
          <div className="p-footer">
            <p>
              ©2021 Food Company. Designed By <span>Aly Abd-Elhady</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
