import React from 'react';
import Webcam from 'react-webcam';

export default class WebcamCapture extends React.Component {

  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.capture = this.capture.bind(this);
  }

  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    const imageData = this.webcam.getScreenshot();
    this.props.onCapture(imageData);
  };

  render() {
    console.log(this.state);
    return (
      <div className="webcamWrapper">
      <h1>What beer does your face say you like?</h1>
        <Webcam
          audio={false}
          height={400}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={400}
        />
        <button className="button" onClick={this.capture}>Beer my Face</button>
      </div>
    );
  }
}
