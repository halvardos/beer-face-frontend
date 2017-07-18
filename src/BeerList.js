import React, { Component } from 'react';
import AdminMenu from './AdminMenu';
import { Link } from 'react-router-dom';

export default class BeerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.getBeers();
  }

  async getBeers() {
    const response = await fetch(`https://face-beer.herokuapp.com/api/beer`);
    const beers = await response.json();

    this.setState({
      ...this.state,
      beers,
    });
  }

  renderBeerlist() {
    return this.state.beers.map(element => (
      <li key={element.beer}><Link to={`/beer/${element.beer}`}>{element.name}</Link></li>
    ));
  }

  render() {
    return (
      <div>
        <AdminMenu />
        <div>List of all our beers</div>
        <ul>{this.renderBeerlist()}</ul>
      </div>
    );
  }
}
