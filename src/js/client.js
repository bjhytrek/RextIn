import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
import Layout from "./components/Layout";
import Home from './components/Home';
import People from './components/People';
import Person from './components/Person';
import PersonEdit from './components/PersonEdit';
import ContactUs from './components/ContactUs';
import store from "./store";
import { connect } from "react-redux";
import Todo from './components/Todo';
import Teams from './components/Teams';
import Register from './components/Register';


// function requireAuth(nextState, replaceState){
//   if(!)
// }


const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute components={Home} />
      <Route path="people(/:requestedPerson)" component={People} />
      <Route path="personEdit(/:requestedPerson)" component={PersonEdit} />
      <Route path="teams" component={Teams} />
      <Route path="contactUs" component={ContactUs} />
      <Route path="Register" component={Register} />
    </Route>
  </Router>
)
const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  {router}
</Provider>, app);
