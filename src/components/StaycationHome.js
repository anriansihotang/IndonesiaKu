/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import '../styles/staycationhome.css'

function StayCationHome() {
  return (
	<Container>
        <Row className="staycation-home-card justify-content-md-center">
          <Col md="12" xl="auto">
            <img src="/images/content/staycation-dream-hotel.jpg" className="staycation-home-img" />
          </Col>
          <Col>
            <div className="staycation-home-text">
              <h5> Staycation </h5> 
			  <h3> Find Your Dream Hotel with Us </h3>
              <h6> Make your stay memorable </h6>
              <p>
				Jika ingin berlibur bersama keluarga, pastikan kamu memilih hotel FAMILY sebagai tempat menginap paling nyaman dan aman. 
				Indonesiaku  menawarkan rekomendasi pilihan jenis penginapan di setiap destinasinya. Dengan fitur Staycation di Indonesiaku, 
				kamu bisa cari hotel yang dekat  kawasan wisata. Tak perlu datang cukup lakukan pemesanan di manapun dan kapan pun yang kamu mau dengan klik tombol di bawah ini! 
              </p>
              <Button variant="success" href="/staycation" className="button-home"> Booking Now </Button>
            </div>
          </Col>
        </Row>
	</Container>
  )
}

export default StayCationHome;
