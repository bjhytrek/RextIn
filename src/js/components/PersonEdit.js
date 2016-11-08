import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { fetchPerson, fetchEndorsements, updatePerson } from "../actions/personActions";
import { ListGroup, ListGroupItem, Image, Panel,Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

@connect((store) => {
  return {
    activeUser: store.user.activeUser,
    person: store.person.person,
  };
})
export default withRouter(class PersonEdit extends React.Component {
  state = {
    name: null,
    position: null,
    status: null,
    about: null,
    address: null,
    phone: null,
    email: null,
    experience: null,
   };

  constructor(props) {
      super(props);
      const { requestedPerson } = this.props.params;
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchPerson(requestedPerson));
    }
    componentWillReceiveProps(nextProps){
      console.log("componentWillRecieveProps run,")
      if(!nextProps.activeUser){
        console.log("nextProps.activeUser: true, reroute.")
        this.props.router.push("/");
      }
    }
    handleInputChange(key, event) {
       this.setState({ [key]: event.target.value });
     }

     handleFormSubmit() {
       const { requestedPerson } = this.props.params;
       this.props.dispatch(updatePerson(requestedPerson, this.state));
     }

  render() {
    const { requestedPerson } = this.props.params;
    const { person } = this.props;
    const mappedPerson = (person ?  Object.keys(person).map((key) =>{
      if(key !== 'endorsements'){
        return <p key={key}>{person[key]}</p>
      } else{
        return null;
      }
    }) : null);

    const mappedPersonForm = Object.keys(this.state).map((key) => {
      return <div key={key}>
        <FormGroup>
        <ControlLabel>{key}</ControlLabel>
          <FormControl
              type="text"
              value={this.state[key]}
              placeholder="Edit"
              onChange={this.handleInputChange.bind(this, key)}
              />
              </FormGroup>
      </div>
    })

    const editPersonView = <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
          <h2>Current Info.</h2>
          {mappedPerson}
        </div>
        <div style={{width:'50%'}}>
          <h2>Edit personal Info</h2>
          {mappedPersonForm}
          <Button bsStyle="primary" onClick={() => this.handleFormSubmit()}>Update</Button>
        </div>
      </div>;

    return <div>{typeof requestedPerson === 'string'  ? editPersonView : <div><h3>No person choosen to edit.</h3></div>}</div>
  }
})
