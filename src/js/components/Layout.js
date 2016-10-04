import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import Header from './Header.js';
import Footer from './Footer.js';

// @connect((store) => {
//   return {
//     title: 'Splatters',
//   };
// })
export default class Layout extends React.Component {


  render() {

    return <div className="layout">
      <Header />
      <main className="container">
        {React.cloneElement(this.props.children, this.props)}
      </main>
      <Footer />
        </div>
  }
}
