import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import { BrowserRouter } from "react-router-dom";
import Story from "../Story/Story";
import Feature from "../Feature/Feature";
import Gallery from "../Gallery/Gallery";
import Menu from "../Menu/Menu";
import ReservationHome from "../ReservationHome/ReservationHome";
import GiftHome from "../GiftHome/GiftHome";
function Home() {
  return (
    <BrowserRouter>
      <HomeSlider />
      <Story />
      <Feature />
      <Gallery />
      <Menu />
      <ReservationHome />
      <GiftHome />
    </BrowserRouter>
  );
}

export default Home;
