import React from 'react';
import WebcamCapture from './WebcamCapture';
import Suggestion from './Suggestion';
import './Suggest.css';

export default class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleCapture = this.handleCapture.bind(this);

    this.state = {
      uploadParams: {},
      imageData: undefined,
    };
  }

  async componentDidMount() {
    await this.getUploadParameters();
  }

  async uploadImage(dataUri, signedRequest) {
    const result = await fetch(this.state.uploadParams.signedRequest, { method: 'PUT', body: await this.dataURItoBlob(this.state.imageData) });
    console.log(result);
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
  }

  render() {
    return (
      <div>
        {(this.state.imageData) ? <Suggestion imgSrc={this.state.imageData}/> : <WebcamCapture onCapture={this.handleCapture}/>}
      </div>
    );
  }
}
