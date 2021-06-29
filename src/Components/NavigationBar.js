import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//REACT BOOTSTRAP

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//IMAGES
import logo from '../assets/images/Logo_stm.png';
/* import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"; */

import LoginModal from './LoginModal';

export default function NavigationBar(props) {
	const [showLoginModal, setShowLoginModal] = useState(false);

	const navbarStyle = { backgroundColor: '#D5E1D2' };

	const handleLoginClick = () => {
		setShowLoginModal(true);
	};

	const handleCloseLoginModal = () => {
		setShowLoginModal(false);
	};

	const handleLogin = async (email, password) => {
		console.log(email, password);
		const url = 'http://localhost:8000/auth';
		const params = {
			email,
			password,
		};
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(params),
			headers: { 'content-type': 'application/json' },
			credentials: 'include',
		});
		const data = await response.json();
		if (response.status === 200) {
			props.updateUser({ name: data.data });
			handleCloseLoginModal();
			//alert(data.message);
		} else {
			alert(data.message);
		}
		console.log(data);
	};

	const handleLogout = async () => {
		const url = 'http://localhost:8000/auth';

		const response = await fetch(url, {
			method: 'DELETE',
			credentials: 'include',
		});

		const data = response.json();

		if (response.status === 200) {
			props.updateUser(null);
		} else {
			alert(data.message);
		}
	};

	return (
		<BrowserRouter>
			<Navbar style={navbarStyle} expand='lg'>
				<Navbar.Brand href='#home'>
					<img src={logo}></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					{props.user ? (
						<BrowserRouter>
							<Nav className='mr-auto'>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#link'>Reservas</Nav.Link>

								<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>

							<Nav className='ml-auto'>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#link'>Link</Nav.Link>

								<NavDropdown
									alignRight
									title={props.user.name}
									id='basic-nav-dropdown'
								>
									<NavDropdown.Item href='#action/3.1'>
										Mi Cuenta
									</NavDropdown.Item>

									{/* <NavDropdown.Item href="#action/3.2">
							Another actions
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}

									<NavDropdown.Divider />
									<NavDropdown.Item onClick={handleLogout}>
										Cerrar seción
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</BrowserRouter>
					) : (
						<BrowserRouter>
							<Nav className='ml-auto'>
								<Button onClick={handleLoginClick}>Iniciar Secion</Button>
							</Nav>
						</BrowserRouter>
					)}

					{/* <Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form> */}
				</Navbar.Collapse>
			</Navbar>

			<LoginModal
				show={showLoginModal}
				handleCloseLoginModal={handleCloseLoginModal}
				handleLogin={handleLogin}
			/>
		</BrowserRouter>
	);
}