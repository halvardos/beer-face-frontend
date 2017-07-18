import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Route exact path="/" component={Suggest}/>
        <Route path="/admin" component={SuggestList}/>
        <Route path="/suggestions" component={SuggestList}/>
        <Route path="/beers" component={BeerList}/>
        <Route path="/beer/:beerId?" component={BeerEdit}/>
      </div>
    </Router>
  </div>
)
export default BasicExample
