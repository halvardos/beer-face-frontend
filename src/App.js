import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Promise from 'bluebird';
import BeerList from './BeerList';
import Suggest from './Suggest';
import SuggestList from './SuggestList';
import BeerEdit from './BeerEdit';
import './App.css';

global.Promise = Promise;

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Suggest a beer</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/suggest">Suggest</Link></li>
        <li><Link to="/suggestions">Suggestions</Link></li>
        <li><Link to="/beer/123">Edit a beer</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Suggest}/>
      <Route path="/suggestions" component={SuggestList}/>
      <Route path="/beers" component={BeerList}/>
      <Route path="/beer/:beerId?" component={BeerEdit}/>
    </div>
  </Router>
)
export default BasicExample
