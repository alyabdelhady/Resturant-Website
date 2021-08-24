import React from "react";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar/Topbar";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./Home/Home";
import Story from "./Story/Story";
import ReservationHome from "./ReservationHome/ReservationHome";
import GiftHome from "./GiftHome/GiftHome";
import Gallery from "./Gallery/Gallery";

import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Story} />
      <Route path="/reservation" component={ReservationHome} />
      <Route path="/contact" component={GiftHome} />
      <Route path="/portfolio" component={Gallery} />
      <Route path="/soon" component={Feature} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
