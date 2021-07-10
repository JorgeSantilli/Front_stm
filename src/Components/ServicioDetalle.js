import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ServicioDetalle() {
	const { id } = useParams();

	const [servicios, detalleDeServicio] = useState(null);

	useEffect(cargaDetalleServicio, []);

	async function cargaDetalleServicio() {
		const url = 'http://localhost:8000/servicios/' + id;
		const response = await fetch(url);
		const data = await response.json();
		detalleDeServicio(data);
	}

	return (
		<BrowserRouter>
			{servicios && servicios.detalleServicio}
			<Row className='d-flex justify-content-center'>
				{servicios && (
					<BrowserRouter>
						<Col></Col>
						<Col>
							<h4>HOLA {servicios.ID_servicios}</h4>
							<h3> {servicios.nombreServicio}</h3>
							<h4> {servicios.detalleServicio}</h4>
							<h4> {servicios.CostoPorPersonaServicio}</h4>
						</Col>
						<Col></Col>
					</BrowserRouter>
				)}
			</Row>
			<Col>{servicios && servicios.ID_servicios}</Col>
		</BrowserRouter>
	);
}
