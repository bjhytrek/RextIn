import React from "react";
import { connect } from "react-redux";
import { fetchPerson, fetchEndorsements, endorse } from "../actions/personActions";
import { ListGroup, ListGroupItem, Image, Panel, FormGroup, ControlLabel, Form, FormControl, Button } from "react-bootstrap";

@connect((store) => {
  return {
    person: store.person.person,
    endorsements: store.person.endorsements,
  };
})
export default class Person extends React.Component {
  state = {
      post: '',
      poster: '',
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
       this.props.dispatch(endorse(requestedPerson, this.state));
     }
  render() {
    const { person, endorsements, requestedPerson} = this.props;

    const mappedEndorsements = (endorsements ? Object.keys(endorsements).map((key) => {
      return <ListGroupItem key={key} header={endorsements[key].post}>{endorsements[key].poster}</ListGroupItem>;
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
        <div>
          <h2>{person.name}</h2>
          <p>{person.position}</p>
          <p>{person.status}</p>
          <p>{person.about}</p>
        </div>
        <h3>Endorsements</h3>
        <ListGroup>{mappedEndorsements}</ListGroup>
        <div>
            <Form inline>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.state.post}
                        placeholder={"Endorse "+requestedPerson+" here"}
                        onChange={this.handleInputChange.bind(this, 'post')}
                        />

                </FormGroup>
                <FormGroup style={{marginLeft: '1rem'}}>
                    <FormControl
                        type="text"
                        value={this.state.poster}
                        placeholder="Your Name:"
                        onChange={this.handleInputChange.bind(this, 'poster')}
                        />
                </FormGroup>
                </Form>
                <Button bsStyle="primary" onClick={() => this.handleFormSubmit()}>Endorse</Button>
              </div>
      </section>

        </div>
  }
}
