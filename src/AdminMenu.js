import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminMenu extends React.Component {
  render() {
    return (
      <div>
        <Link className="button button-outline" to="/">Suggest a beer</Link>
        <Link className="button button-outline" to="/beers">List beers</Link>
        <Link className="button button-outline" to="/suggestions">List suggestions</Link>
        <Link className="button button-outline" to="/beer/">Add a beer</Link>
        <hr/>
      </div>
    );
  }
}
