import React, { Component } from "react";
import Logo from "../images/logo/Indonesiaku.png"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import data from '../data/destinasi.json';

class Header extends Component {
	render() {
		const destinations = data.destinations;
		return (
			<header>
				 <Navbar collapseOnSelect expand="lg" variant="dark">
					<Container fluid>
						<Navbar.Brand href="/"><img src={Logo} alt="Logo Indonesiaku Apps" /></Navbar.Brand>
						<Navbar.Toggle className="bg" style={{color: 'black'}} aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ms-auto">
								<NavDropdown title="Destinasi" id="collasible-nav-dropdown">
									{destinations.map((destinasi) => (
										<NavDropdown.Item key={destinasi.id} href={`/destinasi/${destinasi.id}`}>{destinasi.city}</NavDropdown.Item>
									))}
								</NavDropdown>
								<Nav.Link href="/Staycation">Staycation</Nav.Link>
								<Nav.Link href="/Umkm">UMKM</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>	  
			</header>
		)
	}
}

export default Header;