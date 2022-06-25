import React, { Component } from "react";
import Header from "../components/Header";
import HeroDestination from "../components/HeroDestination";
import MainDestination from "../components/MainDestination";
import Footer from "../components/Footer";
import StayCationHome from "../components/StaycationHome";
import EventHome from "../components/EventHome";
import UmkmHome from "../components/UmkmHome"
import RatingHome from "../components/RatingHome";

class Home extends Component {
	

	render() {
		return (
			<div>
				<Header />
				<HeroDestination />
				<MainDestination/>
				<StayCationHome/>
				<EventHome />
				<UmkmHome/>
				<RatingHome/>
				<Footer />
			</div>
		)
	}
}

export default Home;