import React, { useEffect, useState } from 'react';
import Servicio from './Servicio';
import { Table } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Servicios(props) {
	const [servicios, setServicios] = useState([]);
	useEffect(getServ, []);

	async function getServ() {
		const url = 'http://localhost:8000/servicios';
		/* switch(props.type){
		case 'detallesServicio'
		} */
		const response = await fetch(url);
		const data = await response.json();
		setServicios(data);
	}

	function getServicios() {
		const tabla = servicios.map((servicio) => {
			return (
				<tbody>
					<tr>
						<Servicio
							ID_servicios={servicio.ID_servicios}
							nombreServicio={servicio.nombreServicio}
							detalleServicio={servicio.detalleServicio}
							CostoPorPersonaServicio={servicio.CostoPorPersonaServicio}
						/>
					</tr>
				</tbody>
			);
		});
		return tabla;
	}

	return (
		<BrowserRouter>
			<div class='container'>
				{props.type}
				<Row></Row>
				<Col md={2}></Col>
				<Col>
					<Row responsive='sm' className='d-flex justify-content-center'>
						<Table>
							<thead>
								<tr className='table-active'>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
						</Table>
						<Table className='table-hover'>{getServicios()}</Table>
					</Row>
				</Col>
				<Col md={2}></Col>
			</div>
		</BrowserRouter>
	);
}
