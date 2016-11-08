import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router';
import { signUp, fetchUser } from "../actions/userActions";
import { Alert, Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col, Nav, NavItem } from "react-bootstrap";

@connect((store) => {
  return {
    activeUser: store.user.activeUser,
    error: store.user.error,
  };
})
export default withRouter(class Register extends React.Component {
  state = {
    email: null,
    password: null,
    password2: null,
    name: null,
    phone: '',
    address: '',
    about: '',
    status: '',
    position: '',
    experience: '',

  }
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
    }
  componentWillReceiveProps(nextProps){
    console.log("componentWillRecieveProps run,")
    if(nextProps.activeUser){
      console.log("nextProps.activeUser: true, reroute.")
      this.props.router.push("/");
    }
  }
  handleInputChange(key, event) {
    this.setState({ [key]: event.target.value });
  }
  validate(){
    event.preventDefault();
    const { email, password, password2, name, position } = this.state;
    if(email && password && password2 && name && position){
      if(password === password2){
        console.log("Form passes validation");
        this.handleSignUp();
      } else{
        console.log("Required fields present, passwords don't match.");
      }
    }else{
      console.log("Required fields not present");
    }
  }
  handleSignUp() {
    this.props.dispatch(signUp(this.state))


  }

  render() {
    return <div>
        <h2>User Registration</h2>
        {this.props.error ? <Alert bsStyle="warning">{this.props.error}</Alert> : null}
        <Form onSubmitCapture={()=>{this.validate()}} horizontal>
        <h4>Required Info:</h4>
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
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Password Confirm
              </Col>
              <Col sm={10}>
                  <FormControl
                      type="password"
                      value={this.state.password2}
                      placeholder="Password"
                      onChange={this.handleInputChange.bind(this, 'password2')}
                      />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Name:</Col>
              <Col sm={10}>
                  <FormControl
                      type="text"
                      value={this.state.name}
                      placeholder="Name"
                      onChange={this.handleInputChange.bind(this, 'name')}
                      />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Your Current Position:</Col>
              <Col sm={10}>
                  <FormControl
                      type="text"
                      value={this.state.position}
                      placeholder="Position"
                      onChange={this.handleInputChange.bind(this, 'position')}
                      />
              </Col>
            </FormGroup>
            <h4>Optional Information:</h4>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Phone:</Col>
              <Col sm={10}>
                  <FormControl
                      type="tel"
                      value={this.state.phone}
                      placeholder="Phone"
                      onChange={this.handleInputChange.bind(this, 'phone')}
                      />
              </Col>
            </FormGroup>
            <FormGroup  style={{marginBottom: '4rem'}}>
              <Col componentClass={ControlLabel} sm={2}>Address:</Col>
              <Col sm={10}>
                  <FormControl
                      type="text"
                      value={this.state.address}
                      placeholder="Address"
                      onChange={this.handleInputChange.bind(this, 'address')}
                      />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>About:</Col>
              <Col sm={10}>
                  <FormControl
                      componentClass="textarea"
                      value={this.state.about}
                      placeholder="About"
                      onChange={this.handleInputChange.bind(this, 'about')}
                      />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Your Current Status(Graduation Date):</Col>
              <Col sm={10}>
                  <FormControl
                      type="text"
                      value={this.state.status}
                      placeholder="Status"
                      onChange={this.handleInputChange.bind(this, 'status')}
                      />
              </Col>
            </FormGroup>
            <Button type="submit" style={{float:'right'}} bsStyle="primary">Register</Button>

            </Form>
  </div>
  }
})
