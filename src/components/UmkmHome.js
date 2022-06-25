import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap';
import "../styles/umkmhome.css"

function UmkmHome() {
  return (
	<Container>
		<Row>
			<Col>
				<h2 className='judul-umkm-home'>Rekomendasi UMKM</h2>
				<h3 className='deskripsi-umkm-home'>Temukan pernak penik pilihan yang dibuat langsung oleh warga sekitar destinasi</h3>
			</Col>
		</Row>
		<Row >
			<Col md="6" lg="6" xl="3">
            <Card style={{ height: "410px",width:"281px" }} className="card-umkm-home">
              	<Card.Img variant="top" src="/images/content/UKM-1.jpg" className='card-umk-img-home'/>
                <Card.Text className='card-umk-date-home'> 20 - 11 - 2022 </Card.Text>
                <Card.Title className='card-umk-teks-home'> UMKM Bali yang wajib didatangi! </Card.Title>
				<button className='button-umk-home'> Read More </button>
            </Card>
			</Col>
			<Col md="6" lg="6" xl="3">
            <Card style={{ height: "410px",width:"281px" }} className="card-umkm-home">
              	<Card.Img variant="top" src="/images/content/UKM-2.jpeg" className='card-umk-img-home'/>
                <Card.Text className='card-umk-date-home'> 20 - 11 - 2022 </Card.Text>
                <Card.Title className='card-umk-teks-home'> Cari oleh - oleh ? Cek 5 UMKM dari Bandung ini!</Card.Title>
				<button className='button-umk-home'> Read More </button>
            </Card>
			</Col>
			<Col md="6" lg="6" xl="3">
            <Card style={{ height: "410px",width:"281px" }} className="card-umkm-home">
              	<Card.Img variant="top" src="/images/content/UKM-3.jpg" className='card-umk-img-home'/>
                <Card.Text className='card-umk-date-home'> 20 - 11 - 2022 </Card.Text>
                <Card.Title className='card-umk-teks-home'>Rekomendasi UMKM legenda yang ada di Surakarta</Card.Title>
				<button className='button-umk-home'> Read More </button>
            </Card>
			</Col>
			<Col md="6" lg="6" xl="3">
            <Card style={{ height: "410px",width:"281px" }} className="card-umkm-home">
				<Card.Img variant="top" src="/images/content/UKM-4.jpg" className='card-umk-img-home'/>
            	<Card.Text className='card-umk-date-home'> 20 - 11 - 2022 </Card.Text>
            	<Card.Title className='card-umk-teks-home'> Simak UMKM unik dari tanah NTT </Card.Title>
              	<button className='button-umk-home'> Read More </button>
            </Card>
			</Col>
          </Row>
	</Container>
  )
}

export default UmkmHome;
