import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from 'react-router';
import Login from './Login.js';
import { signOut, fetchUser, } from "../actions/userActions";

@connect((store) => {
  return {
    activeUser: store.user.activeUser,
    error: store.user.error,
    message: store.user.message,
  };
})
export default class Header extends React.Component {
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchUser());

    }
    // componentWillReceiveProps(nextProps){
    //   if(nextProps.activeUser !== this.state.activeUser){
    //     console.log("from header ",this.props.activeUser)
    //     if(this.props.activeUser){
    //       const { location } = this.props;
    //       console.log("active user, checking route.")
    //       if (location.state && location.state.nextPathname) {
    //         this.props.router.replace(location.state.nextPathname)
    //       } else {
    //         this.props.router.replace('/')
    //       }
    //     }
    //   }
    // }
  handleSignOut(){
    this.props.dispatch(signOut());
  }
  handleModalClick(){
    this.props.dispatch(toggleModal());
  }

  render() {
    if(this.props.activeUser == false) {
      var activeUser = null;
    }else {
      var activeUser = this.props.activeUser[0];
    };
    return <header>
        <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>RextIn</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <li><Link to="People">People</Link></li>
          <li><Link to="Teams">Teams</Link></li>
          <li><Link to="ContactUs">Contact Us</Link></li>
        </Nav>


          {activeUser ? <Nav pullRight><NavItem href="#">{activeUser.email}</NavItem><NavItem  onClick={()=>{this.handleSignOut()}}>Sign Out</NavItem></Nav> : <Login />}
        </Navbar.Collapse>
        </Navbar>
        </header>
  }
}
