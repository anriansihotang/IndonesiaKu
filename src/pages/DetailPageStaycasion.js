import React, { Component } from 'react'
import PageDetailTitle from '../components/PageDetailTitle-Staycasion';
import ItemDetails from "../json/itemDetails.json";
import FeaturedImage from '../components/FeaturedImage-Staycasion';
import PageDetailDescription from '../components/PageDetailDescription-Staycasion';
import BookingForm from '../parts/BookingForm';
import Footer from '../components/Footer';

export default class DetailPageStaycasion extends Component {
  componentDidMount(){
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <PageDetailTitle
        breadcrumb={breadcrumb}
        data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
        <section className='container'>
          <div className='row'>
              <div className='col-7 pr-5'>
                <PageDetailDescription data={ItemDetails}></PageDetailDescription>
              </div>
              <div className='col-5'><BookingForm ItemDetails={ItemDetails}></BookingForm></div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
}
