import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
//import Col from 'react-bootstrap/Col';

export default function Servicio(props) {
	const handleEditClick = () => {
		alert('EDITAR');
	};
	const handleDeleteClick = () => {
		alert('BORRAR');
	};

	return (
		<BrowserRouter>
			<Row>
				<Table className='my-2 ml-5'>
					<tbody>
						<tr>
							<Link to={`Servicio/${props.ID_servicios}`}>
								<td>{props.ID_servicios}</td>
							</Link>

							<Link to={`Servicio/${props.nombreServicio}`}>
								<td>{props.nombreServicio}</td>
							</Link>
							<td>{props.detalleServicio}</td>
							<td>$ {props.CostoPorPersonaServicio}</td>
							<td>
								<Button variant='light' onClick={handleEditClick}>
									<FontAwesomeIcon color='green' icon={faEdit} />
								</Button>
							</td>
							<td>
								<Button variant='light' onClick={handleDeleteClick}>
									<FontAwesomeIcon color='red' icon={faTrash} />
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</BrowserRouter>
	);
}
