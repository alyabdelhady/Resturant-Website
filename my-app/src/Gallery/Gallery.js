import React from "react";

import "./Gallery.css";

function Gallery() {
  return (
    <div className="food">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="img-frame">
              <img className="img-food" src="/slider/35.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12  col-xs-12">
            <div className="img-frame">
              <img className="img-food" src="/slider/34.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="img-frame">
              <img className="img-food" src="/slider/33.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="img-frame">
              <img className="img-food" src="/slider/38.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
