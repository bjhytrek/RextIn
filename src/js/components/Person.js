import React from "react";
import { connect } from "react-redux";
import { fetchPerson, fetchEndorsements } from "../actions/personActions";
import { ListGroup, ListGroupItem, Image, Panel } from "react-bootstrap";

@connect((store) => {
  return {
    person: store.person.person,
    endorsements: store.person.endorsements,
  };
})
export default class Person extends React.Component {
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchPerson('Brendan'));
      this.props.dispatch(fetchEndorsements('Brendan'));
    }

  render() {
    const { person, endorsements } = this.props;
    const mappedEndorsements = Object.keys(endorsements).map((key) => {
      return <ListGroupItem key={key} header={endorsements[key].post}>{endorsements[key].poster}</ListGroupItem>;
    });

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
      </section>

        </div>
  }
}
