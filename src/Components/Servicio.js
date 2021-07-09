import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Servicio(props) {
	return (
		<BrowserRouter>
			<Row>
				<Table>
					<tbody>
						<tr>
							<td>{props.ID_servicios}</td>
							<td>{props.nombreServicio}</td>
							<td>{props.detalleServicio}</td>
							<td>$ {props.CostoPorPersonaServicio}</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</BrowserRouter>
	);
}
