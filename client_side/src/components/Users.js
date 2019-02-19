import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = { users: []};
    }
    componentDidMount() {
      axios.get('http://localhost:3000/users')
      .then(response => {
       this.setState({ users: response.data.data });
       
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render() {
      return (
        <div>
        <Container color="info">

        </Container>
        </div>
      );
    }
  }
  
  export default Users;