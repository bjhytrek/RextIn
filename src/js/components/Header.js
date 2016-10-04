import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
// @connect((store) => {
//   return {
//     title: 'Splatters',
//   };
// })
export default class Header extends React.Component {


  render() {

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
          <li><Link to="Todo">Todo</Link></li>
        </Nav>

        </Navbar.Collapse>
        </Navbar>
        </header>
  }
}
