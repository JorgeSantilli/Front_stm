import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function EditarServicio() {
	const [nombreServicio, setNombreServicio] = useState('');
	const [detalleServicio, setDetalleServicio] = useState('');
	const [precioServicio, setPrecioServicio] = useState('');

	const handleNombreServicio = (event) => {
		setNombreServicio(event.target.value);
	};
	const handleDetalleServicio = (event) => {
		setDetalleServicio(event.target.value);
	};
	const handlePrecioServicio = (event) => {
		setPrecioServicio(event.target.value);
	};

	const handleSaveServicio = () => {
		const url = 'http://localhost:8000/servicios';
		const params = {
			nombreServicio,
			detalleServicio,
			precioServicio,
		};
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(params),
			headers: { 'content-type': 'application/json' },
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<Router>
			<div class='container'>
				<Form>
					<Form.Group className='mb-3'>
						<Form.Label>Nombre Servicio</Form.Label>
						<Form.Control
							type='text'
							Value={nombreServicio}
							onChange={handleNombreServicio}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Detalle Servicio</Form.Label>
						<Form.Control
							type='text'
							Value={detalleServicio}
							onChange={handleDetalleServicio}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Precio del Servicio</Form.Label>
						<Form.Control
							type='text'
							Value={precioServicio}
							onChange={handlePrecioServicio}
						/>
					</Form.Group>

					<Button className='my-2 ml-5' onClick={handleSaveServicio}>
						Guardar
					</Button>
					<Button variant='primary' type='submit' className='my-2 ml-5'>
						Cancelar
					</Button>
				</Form>
			</div>
		</Router>
	);
}
