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
  <div className="container">
    <Router>
      <div>
          <Link className="button button-outline" to="/">Suggest a beer</Link>
          <Link className="button button-outline" to="/beers">List beers</Link>
          <Link className="button button-outline" to="/suggestions">List suggestions</Link>
          <Link className="button button-outline" to="/beer/">Add a beer</Link>

        <hr/>

        <Route exact path="/" component={Suggest}/>
        <Route path="/suggestions" component={SuggestList}/>
        <Route path="/beers" component={BeerList}/>
        <Route path="/beer/:beerId?" component={BeerEdit}/>
      </div>
    </Router>
  </div>
)
export default BasicExample
