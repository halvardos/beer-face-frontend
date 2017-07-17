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
    return (
      <div>
        <Webcam
          audio={false}
          height={'100%'}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={'100%'}
        />
        <button className="button" onClick={this.capture}>Beer my Face</button>
      </div>
    );
  }
}
