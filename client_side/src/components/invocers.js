import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
class Invoicers extends Component {
    render() {
      return (
        <div className="bg-info">
        <div>
        <Container>
          <Row>
            <Col><h1><span className="label label-warning">Invoicers</span></h1></Col>
          </Row>
          <Row>
            <Col xs="6" sm="8"> <Button color="primary">Add Invoicer</Button></Col>
            <Col xs="6" sm="4">
              <Button color="success">Sort By Invoicer Name</Button>{' '}
              <Button color="success">Sort By Status</Button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Table size="sm" hover responsive >
            <thead>
              <tr color>
              <th>Id</th>
              <th>Invoicer Name</th>
              <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <th scope="row">1</th>
              <td>Invoicer 1</td>
              <td>True</td>
              </tr>
            </tbody>
      </Table>
        </Container>
       </div>
      </div>
      );
    }
  }
  
  export default Invoicers;