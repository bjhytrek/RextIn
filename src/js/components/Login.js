import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { loginUser, signUp } from "../actions/userActions";
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col, Nav, NavItem } from "react-bootstrap";

@connect((store) => {
  return {
    error: store.user.error,
  };
})
export default class Login extends React.Component {
  state = {
    showModal: false,
    email: '',
    password: '',
  }
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
    }

  close() {
  this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleInputChange(key, event) {
    this.setState({ [key]: event.target.value });
  }
  handleSignIn() {

    this.props.dispatch(loginUser(this.state.email, this.state.password));
  }

  render() {
    return <div>
        <Nav pullRight><NavItem onClick={()=>{this.open()}}>Sign In</NavItem>
        <li><Link to="Register">Register</Link></li>
        </Nav>
      <Modal show={this.state.showModal} onHide={()=> {this.close()}}>
      <Form horizontal >
        <Modal.Header>
          <Modal.Title>Login/Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                  <FormControl
                      type="email"
                      value={this.state.email}
                      placeholder="email"
                      onChange={this.handleInputChange.bind(this, 'email')}
                      />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                  <FormControl
                      type="password"
                      value={this.state.password}
                      placeholder="Password"
                      onChange={this.handleInputChange.bind(this, 'password')}
                      />
              </Col>
            </FormGroup>

        </Modal.Body>
        <Modal.Footer>
          {this.props.error}
          <Button onClick={()=>{this.handleSignIn()}} bsStyle="primary" >Login</Button>
        </Modal.Footer>
        </Form>
    </Modal>
  </div>
  }
}
