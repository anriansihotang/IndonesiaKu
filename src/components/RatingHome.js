/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import "../styles/ratinghome.css"

function RatingHome() {
  return (
	<Container>
		<div className='rating-home'>
			<Row >
				<Col md="12" lg="5">
				<img src="/images/content/foto-keluarga.jpg" className="img-fluid rating-img-home" />
				</Col>
				<Col>
				<h2 className="judul-rating-home"> Apa kata mereka ? </h2>
				<h6 className='bintang-rating-home'> ⭐⭐⭐⭐⭐ </h6>
				<p className="teks-rating-home">
					Perjalanan liburan yang sangat menyenangkan tidak sabar untuk
					liburan selanjutnya
				</p>
				<p className="nama-rating-home"> Budi, Product Manager </p>
				<button className='button-rating-home'> Read Their Story </button>
				</Col>
			</Row>
		</div>
	</Container>
  )
}

export default RatingHome
