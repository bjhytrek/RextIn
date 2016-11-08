import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchPerson, fetchEndorsements, endorse } from "../actions/personActions";
import { ListGroup, ListGroupItem, Image, Panel, FormGroup, ControlLabel, Form, FormControl, Button } from "react-bootstrap";

@connect((store) => {
  return {
    activeUser: store.user.activeUser,
    person: store.person.person,
    endorsements: store.person.endorsements,
  };
})
export default class Person extends React.Component {
  state = {
      post: '',
}
  constructor(props) {
      super(props);
      const { requestedPerson } = this.props;
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchPerson(requestedPerson));
      this.props.dispatch(fetchEndorsements(requestedPerson));
    }
    handleInputChange(key, event) {
      this.setState({ [key]: event.target.value });
  }

     handleFormSubmit() {
       const { requestedPerson } = this.props;
       this.props.dispatch(endorse(requestedPerson, this.props.activeUser[0].displayName, this.state.post));
     }
  render() {
    const { person, endorsements, requestedPerson, activeUser} = this.props;

    const mappedEndorsements = (endorsements ? Object.keys(endorsements).map((key) => {
      return <ListGroupItem key={key} header={endorsements[key].endorsement}>{endorsements[key].endorser}</ListGroupItem>;
    }) : null)

    return <div style={{display: 'flex'}}>
      <section>
      <figure><Image src="http://placekitten.com/200/200" responsive rounded /></figure>
        <Panel header="Contact Info.">
          <p>{person.address}</p>
          <p>{person.email}</p>
          <p>{person.phone}</p>
        </Panel>
      </section>
      <section style={{marginLeft: '1rem'}}>
          {activeUser ?
            activeUser[0].uid === requestedPerson ?
            <Link to={"/personEdit/"+requestedPerson}>Edit Profile</Link>
             : null
           :null}
        <div>
          <h2>{person.name}</h2>
          <p>{person.position}</p>
          <p>{person.status}</p>
          <p>{person.about}</p>
        </div>
        <h3>Endorsements</h3>
        <ListGroup>{mappedEndorsements}</ListGroup>
        {activeUser ?
          activeUser[0].uid === requestedPerson ? <div><Form>
              <FormGroup>
                  <FormControl
                      type="text"
                      value={this.state.post}
                      placeholder={"Endorse "+person.name}
                      onChange={this.handleInputChange.bind(this, 'post')}
                      />

              </FormGroup>
              </Form>
              <Button bsStyle="primary" onClick={() => this.handleFormSubmit()}>Endorse</Button></div>

          : null : null}
      </section>

        </div>
  }
}
