import React, { Component } from 'react';
import AdminMenu from './AdminMenu';

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
    return this.state.suggestions.map((element) => {
      const suggestion = JSON.parse(element.suggestions)[0];
      if (!suggestion) return ''
      return (<div key={element.suggestion}>
        <div className="row">
          <div className="column">
            <h4>Image</h4>
            <img src={element.image_url} alt="face"/>
            {(element.suggestions) ? <h4>Recommended: {suggestion.beer.name}</h4> : ''}
          </div>
          <div className="column">
            <h4>Faces</h4>
            <pre><code>
              {(element.suggestions) ? <h4>Recommended: {JSON.stringify(suggestion.parsedFace, null, 4)}</h4> : ''}
            </code></pre>
          </div>
        </div>
        <hr/>
      </div>
    )});
  }

  render() {
    return (
      <div>
        <AdminMenu />
        <h1>List of all suggestions made</h1>
        <div>{this.renderSuggestionList()}</div>
      </div>
    );
  }
}
