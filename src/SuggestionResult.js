import React from 'react';

export default class SuggestionResult extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>We recommend to you: </h1>
        <h4>{this.props.suggestion.beer.name}</h4>
        <h4>{this.props.suggestion.beer.description}</h4>
      </div>
    );
  }
}

