import React from 'react';
import WebcamCapture from './WebcamCapture';
import Suggestion from './Suggestion';
import SuggestionResult from './SuggestionResult';
import './Suggest.css';

export default class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleCapture = this.handleCapture.bind(this);

    this.state = {
      uploadParams: {},
      imageData: undefined,
      imageURL: undefined,
      suggestion: undefined,
    };
  }

  async componentDidMount() {
    await this.getUploadParameters();
  }

  async uploadImage(dataURI, signedRequest) {
    const result = await fetch(this.state.uploadParams.signedRequest, { method: 'PUT', body: await this.dataURItoBlob(dataURI) });

    if (result.status === 200) {
      this.setState({
        imageURL: this.state.uploadParams.url,
      });
      this.getSuggestion(this.state.uploadParams.url);
    }
  }

  async dataURItoBlob(dataURI) {
    return fetch(dataURI).then(res => res.blob());
  }

  async getUploadParameters() {
    const result = await fetch('https://face-beer.herokuapp.com/api/uploadParameters');
    const uploadParams = JSON.parse(await result.text());
    this.setState({
      ...this.state,
      uploadParams,
    });
  }

  handleCapture(imageData) {
    this.setState({
      imageData,
    });
    this.uploadImage(imageData);
  }

  async getSuggestion(imageURL) {
    const body = JSON.stringify({ imageUrl: imageURL });
    const result = await fetch('https://face-beer.herokuapp.com/api/suggest', { method: "POST", body });
    const suggestion = await result.json();

    this.setState({
      suggestion: suggestion[0],
    });
  }

  renderSuggesting() {
    return (this.state.imageData) ? <Suggestion imgSrc={this.state.imageData}/> : <WebcamCapture onCapture={this.handleCapture}/>;
  }

  render() {
    return (
      <div>
        {(this.state.suggestion) ? <SuggestionResult suggestion={this.state.suggestion} /> : this.renderSuggesting() }
      </div>
    );
  }
}
