import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="top-bar">
      <div class="container">
        <div className="top-bar1">
          <div className="div-1">
            <Link className="top-bar-link" to="#">
              <span className="top-bar-icon">
                <i class="fas fa-phone-alt"></i>
              </span>
              +050787789
            </Link>
            <Link className="top-bar-link" to="#">
              <span className="top-bar-icon">
                <i class="fas fa-envelope"></i>
              </span>
              Foody@warptheme.com
            </Link>
            <div className="top-bar-icon2">
              <i class="fab fa-openid"></i>
              <span className="topbar-text">Open hour - 10 am - 11 pm</span>
            </div>
          </div>
          <div className="div-2">
            <Link className="topbar-media-icon" to="#">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link className="topbar-media-icon" to="#">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link className="topbar-media-icon" to="#">
              <i class="fab fa-skype"></i>
            </Link>
            <Link className="topbar-media-icon" to="#">
              <i class="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
