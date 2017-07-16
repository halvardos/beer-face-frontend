import React from 'react';

export default class BeerEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: {
        beer: -1,
        name: "",
        description: "",
        age: 0,
        female: 0,
        male: 0,
        moustache: 0,
        beard: 0,
        sideburns: 0,
        smile: 0,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.beerId) {
      await this.getBeer(this.props.match.params.beerId);
    }
  }

  async getBeer(beerId) {
    const response = await fetch(`https://face-beer.herokuapp.com/api/beer/${beerId}`);
    this.setState({
      beer: await response.json(),
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      beer: {
        ...this.state.beer,
        [name]: value,
      },
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.props.match.params.beerId) {
      return await fetch("https://face-beer.herokuapp.com/api/beer", {
        method: "PATCH",
        body: new FormData(event.target),
      });
    }
    return await fetch("https://face-beer.herokuapp.com/api/beer", {
      method: "POST",
      body: new FormData(event.target),
    });
  }

  renderBeer() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="beer" value={this.state.beer.beer} />
        <label>
          name
          <input type="text" name="name" value={this.state.beer.name} onChange={this.handleInputChange} />
        </label>
        <label>
          description
          <textarea type="text" name="description" value={this.state.beer.description} onChange={this.handleInputChange} />
        </label>
        <label>
          age
          <input type="number" name="age" value={this.state.beer.age} onChange={this.handleInputChange} />
        </label>
        <label>
          female
          <input type="number" name="female" value={this.state.beer.female}onChange={this.handleInputChange} />
        </label>
        <label>
          male
          <input type="number" name="male" value={this.state.beer.male} onChange={this.handleInputChange} />
        </label>
        <label>
          moustache
          <input type="number" name="moustache" value={this.state.beer.moustache} onChange={this.handleInputChange} />
        </label>
        <label>
          beard
          <input type="number" name="beard" value={this.state.beer.beard} onChange={this.handleInputChange} />
        </label>
        <label>
          sideburns
          <input type="number" name="sideburns" value={this.state.beer.sideburns} onChange={this.handleInputChange} />
        </label>
          <label>
          smile
          <input type="number" name="smile" value={this.state.beer.smile} onChange={this.handleInputChange} />
        </label>
        {(this.props.match.params.beerId) ? <button className="button button-outline" type="submit">Update</button> : <button className="button button-outline" type="submit">Create</button>}
      </form>
    </div>);
  }

  render() {
    return (
      <div>
        {(this.props.match.params.beerId) ? <h1>Edit beer</h1> : <h1>Create a beer</h1>}
        {this.renderBeer()}
      </div>);
  }
}
