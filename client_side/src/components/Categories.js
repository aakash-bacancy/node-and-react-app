import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor(props){
    super(props);
    this.state = { categories: []};
    }
    componentDidMount() {
      axios.get('http://localhost:3000/categories/')
      .then(response => {
       this.setState({ categories: response.data.data });
       
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render() {
      return (
        <div className="bg-info">
        <div>
        <Container>
          <Row>
            <Col><h1><span className="label label-warning">Categories</span></h1></Col>
          </Row>
          <Row>
            <Col xs="6" sm="8"> <Button color="primary">Add Category</Button></Col>
            <Col xs="6" sm="4">
              <Button color="success">Sort By Category Name</Button>{' '}
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
              <th>Category Name</th>
              <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map(categories=>
                <tr key={categories.id}>
                <td>{categories.id}</td>
                <td>{categories.categoryName} </td>
                <td>{categories.status}</td>
                <td>
                        <Link to={"/edit/" + categories.id}>Edit</Link>
                </td>
                <td>
                        {/* <a onClick={e => {this.handleDelete(categories.id)}}>Delete</a> */}
                        Delete
                </td>
                </tr>
                      )
              }
              </tbody>
        </Table>
        </Container>
       </div>
      </div>
      );
    }
  }
  
  export default Categories;