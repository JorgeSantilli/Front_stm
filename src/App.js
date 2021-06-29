import React, { useState } from 'react';
//import './App.css';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
	const [user, setUser] = useState(null);
	const updateUser = (newUser) => {
		setUser(newUser);
	};

	return (
		<BrowserRouter>
			<NavigationBar user={user} updateUser={updateUser} />

			<Switch>
				<Route exact path='/header'>
					<Header />
				</Route>

				<Route path='/footers'>
					<Footer />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
