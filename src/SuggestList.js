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
      <div key={element.suggestion}>
        <div className="row">
          <div className="column">
            <h4>Image</h4>
            <img src={element.image_url} alt="face"/>
            <h4>Recommended: {JSON.parse(element.suggestions)[0].beer.name}</h4>
          </div>
          <div className="column">
            <h4>Faces</h4>
            <pre><code>
              {JSON.stringify(JSON.parse(element.suggestions)[0].parsedFace, null, 4)}
            </code></pre>
          </div>
        </div>
        <hr/>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>List of all suggestions made</h1>
        <div>{this.renderSuggestionList()}</div>
      </div>
    );
  }
}
