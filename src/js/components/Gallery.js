import React from "react";
import { connect } from "react-redux";
import LightboxWrapper from './LightboxWrapper';

export default class Gallery extends React.Component {


  render() {

    return <div>
    <h2>The Gallery component.</h2>
    <LightboxWrapper />
        </div>
  }
}
