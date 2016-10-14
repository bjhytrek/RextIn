import React from "react";
import { connect } from "react-redux";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import GoogleMapWrapper from "./GoogleMapWrapper.js";
 const ContactUs = React.createClass({

  render() {

    return <div>
      <h1>RBDC Rexburg, Idaho.</h1>
      <div style={{display: 'flex'}}>
      <section className="contact-section">
        <h3>Location</h3>
        <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9169.956571774843!2d-111.78503091826362!3d43.829176102154676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540a5038ffbacd%3A0x9c917d6324e3ff12!2sSplatters+Paintball+and+Family+Fun+Center!5e0!3m2!1sen!2sus!4v1475097141885" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'}} />
      </section>
      <section className="contact-section" style={{marginLeft: '10px'}}>
        <h3>Contact Info</h3>
        <h4>phone</h4>
      </section>

      </div>
    </div>
  }
});
export default ContactUs;
