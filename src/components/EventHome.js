import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import "../styles/eventhome.css"

function EventHome() {
  return (
	<Container>
		<Row>
			<Col>
				<h2	h2 className='judul-event-home'>Indonesian Event Category</h2>
				<h6 className='teks-event-home'>What’s going on</h6>
			</Col>
		</Row>
		<Row>
			<Col md="12" lg="6" xl="3">
				<Card className="card-event-home" >
					<Card.Header className='judul-event'>Mei</Card.Header>
					<table className='table-event'>
						<tr>
							<td>5-7</td>
							<td>Seba Badui 2022</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>Festival Kota Tua Majene</td>
						</tr>
						<tr>
							<td>11-14</td>
							<td>Haul Guru Tua Raodhah</td>
						</tr>
					</table>
				</Card>
			</Col>
			<Col md="12" lg="6" xl="3">
				<Card className="card-event-home">
					<Card.Header className='judul-event'>June</Card.Header>
					<table className='table-event'>
						<tr>
							<td>1</td>
							<td>Festival Pesona Aekhula</td>
						</tr>
						<tr>
							<td>1-5</td>
							<td>Festival Budaya Saijaan</td>
						</tr>
						<tr>
							<td>4-5</td>
							<td>Festival Pesona Tambora</td>
						</tr>
					</table>
				</Card>
			</Col>
			<Col md="12" lg="6" xl="3">
				<Card className="card-event-home">
					<Card.Header className='judul-event'>July</Card.Header>
					<table className='table-event'>
						<tr>
							<td>1-5</td>
							<td>Festival Kebudayaan Yogyakarta</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>Prambanan Jazz</td>
						</tr>
						<tr>
							<td>1-2</td>
							<td>Oeanman Bali 2022</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Festival 7 Sungai</td>
						</tr>
					</table>
				</Card>
			</Col>
			<Col md="12" lg="6" xl="3">
				<Card className="card-event-home">
					<Card.Header className='judul-event'>Agust</Card.Header>
						<table className='table-event'>
							<tr>
								<td>2</td>
								<td>Festival Pacu Jalur</td>
							</tr>
							<tr>
								<td>8</td>
								<td>Jember Fashion Carnaval</td>
							</tr>
							<tr>
								<td>7</td>
								<td>Keuken</td>
							</tr>
						</table>
				</Card>
			</Col>
		</Row>
	</Container>
  )
}

export default EventHome
