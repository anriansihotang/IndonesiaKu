import React, { Component } from "react";
import Header from "../components/Header";
import HeroDestination from "../components/HeroDestination";
import MainDestination from "../components/MainDestination";
import EventHome from "../components/EventHome"
import Footer from "../components/Footer";
import UmkmHome from "../components/UmkmHome";
import RatingHome from "../components/RatingHome";
import StayCationHome from "../components/StaycationHome";

class Destination extends Component {
	

	render() {
		return (
			<div>
				<Header />
				<HeroDestination />
				<MainDestination/>
				<StayCationHome/>
				<EventHome/>
				<UmkmHome/>
				<RatingHome/>
				<Footer/>
			</div>
		)
	}
}

export default Destination;