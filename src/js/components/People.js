import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import PersonEdit from "./PersonEdit";
import Person from "./Person";
import { fetchPeople } from "../actions/peopleActions";

@connect((store) => {
  return {
    people: store.people.people,
  };
})

export default class People extends React.Component {
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
      this.props.dispatch(fetchPeople());
    }

  render() {
    const { requestedPerson } = this.props.params;

    const { people } = this.props;

    const mappedPeople = Object.keys(people).map((key) => {
      return <li key={key}><Link to={"people/"+[key]}>{people[key].name}</Link></li>;
    })
    const teamList = <div>
      <h1>RExt Team Members:</h1>
      <ul>
        {mappedPeople}
      </ul>
    </div>;
    return <div>
        {typeof requestedPerson === 'string'  ? <Person requestedPerson={requestedPerson} /> : teamList}
        </div>
  }
}
