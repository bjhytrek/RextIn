import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
// @connect((store) => {
//   return {
//     title: 'Splatters',
//   };
// })
export default class Footer extends React.Component {


  render() {

    return <footer>
      <div className="footer--container container">
        <div>LOGO</div>
        <div>157 N 2nd E
          Rexburg, ID 83440
          ph: (208)-357-4171
          splattersrexburg@gmail.com</div>
        <div className="copyright">Copyright 2016 Splatters Paintball and Family Fun Center. All rights reserved.</div>

      </div>
</footer>
  }
}
