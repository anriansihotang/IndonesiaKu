import React, { Component } from "react";
import Header from "../components/Header";
import pageHotel from "../json/PageHotel.json"
import MostPicked from "../components/MostPicked-Staycasion";
import Categories from "../components/Categories-Staycasion";
import Footer from "../components/Footer";
import HeroStaycasion from "../components/Hero-Staycasion";

export default class PageHotel extends Component {
    render() {
        return (
          <>
            <Header />
            <HeroStaycasion/>
            <MostPicked data={pageHotel.mostPicked}/>
            <Categories data={pageHotel.categories}/>
            <Footer />
          </>
        );
      }
    }
