import React from "react";
import { connect } from "react-redux";
import { fetchPerson, fetchEndorsements } from "../actions/personActions";
import { ListGroup, ListGroupItem, Image, Panel,Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

@connect((store) => {
  return {
    person: store.person.person,
  };
})
export default class PersonEdit extends React.Component {
  state = {
    name: '',
    address: '',
    phone: '',
    position: '',
    status: '',
    email: '',
   };
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchPerson('Brendan'));
    }

    handleInputChange(event) {
       this.setState({ [event.target.id]: event.target.value });
     }
     handleInputSubmit() {
     this.props.dispatch(createPost(this.state.post));
     }
  render() {
    const { person } = this.props;

    return <div>

          <Panel header="Name">
          <h5>{person.name}</h5>
          <FormGroup>
          <FormControl
              type="text"
              value={this.state.name}
              placeholder="Edit"
              id="name"
              onChange={this.handleInputChange.bind(this)}
            />
            <Button bsStyle="primary" onClick={() => this.handleInputSubmit()}>Update</Button>

          </FormGroup>
          </Panel>
          <p>{person.address}</p>
          <p>{person.email}</p>
          <p>{person.phone}</p>
          <p>{person.position}</p>
          <p>{person.status}</p>
          <p>{person.about}</p>
        </div>
  }
}
