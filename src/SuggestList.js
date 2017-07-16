import React, { Component } from 'react';

export default class SuggestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
  }

  componentDidMount() {
    this.getSuggestions();
  }

  async getSuggestions() {
    const response = await fetch(`https://face-beer.herokuapp.com/api/suggestion`);
    const suggestions = await response.json();

    this.setState({
      ...this.state,
      suggestions,
    });
  }

  renderSuggestionList() {
    return this.state.suggestions.map(element => (
      <li key={element.suggestion}>
        <img src={element.image_url} alt="face"/>
        <h3>{JSON.parse(element.suggestions)[0].beer.name}</h3>
        <h4>Faces</h4>
        <pre><code>
          {JSON.stringify(JSON.parse(element.suggestions)[0].parsedFace)}
        </code></pre>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div>List of all our suggestions</div>
        <ul>{this.renderSuggestionList()}</ul>
      </div>
    );
  }
}
