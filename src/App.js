import React, { useState, useEffect } from 'react';
//import './App.css';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Reservas from './Components/Reservas';
import Pasajeros from './Components/Pasajeros';
import Servicios from './Components/Servicios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
	const [user, setUser] = useState(null);

	useEffect(checkUser, []);

	function checkUser() {
		fetch('http://localhost:8000/auth/check', {
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				updateUser(data.data);
			});
	}

	const updateUser = (newUser) => {
		setUser(newUser);
	};

	return (
		<BrowserRouter>
			<NavigationBar user={user} updateUser={updateUser} />

			<Switch>
				<Route exact path='/Reservas'>
					<Reservas />
				</Route>

				<Route exact path='/Pasajeros'>
					<Pasajeros />
				</Route>

				<Route exact path='/Servicios'>
					<Servicios />
				</Route>

				<Route exact path='/header'>
					<Header />
				</Route>

				<Route path='/footers'>
					<Footer />
				</Route>

				{/* <NotFound /> */}
			</Switch>
		</BrowserRouter>
	);
}
