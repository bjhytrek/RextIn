import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from "./components/Layout";
import Home from './components/Home';
import People from './components/People';
import Person from './components/Person';
import PersonEdit from './components/PersonEdit';
import ContactUs from './components/ContactUs';
import store from "./store";
import Todo from './components/Todo';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute components={Home} />
      <Route path="people" component={People} />
      <Route path="person" component={Person} />
      <Route path="personEdit" component={PersonEdit} />
      {/* <Route path="teams" component={Teams} /> */}


    </Route>
  </Router>
)
const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  {router}
</Provider>, app);
