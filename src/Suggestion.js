import React from 'react';
import Webcam from 'react-webcam';

export default class Suggestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bullshitList: [
        'Measuring sideburns size',
        'Sissyness filter being applied',
        'Categorising your stash',
        'Calibrating gender',
        'Measuring sideburns size',
        'Sissyness filter being applied',
        'Categorising your stash',
        'Calibrating gender',
        'Measuring sideburns size',
        'Sissyness filter being applied',
        'Categorising your stash',
        'Calibrating gender',
        'Measuring sideburns size',
        'Sissyness filter being applied',
        'Categorising your stash',
        'Calibrating gender',
        'Measuring sideburns size',
        'Sissyness filter being applied',
        'Categorising your stash',
        'Calibrating gender',
      ], // todo add more
      currentBS: undefined,
    };
    this.changeBullshitSentence = this.changeBullshitSentence.bind(this);
  }

  componentDidMount() {
    this.changeBullshitSentence();
    this.bstimer = setInterval(this.changeBullshitSentence, 3000);
  }

  changeBullshitSentence() {
    const nextIndex = Math.floor(Math.random()*this.state.bullshitList.length);
    const nextBS = this.state.bullshitList[nextIndex];
    const newBullshitList = this.state.bullshitList.filter((value, index) => {
      return index !== nextIndex;
    });

    this.setState({
      currentBS: nextBS,
      bullshitList: newBullshitList,
    });
  }

  render() {
    return (
      <div className="suggestionsContainer">
        <img src={this.props.imgSrc} alt="Webcam capture"/>
        <div className="bullshit">
          <div>{this.state.currentBS}</div>
          <div className="bullshit-spinner"><i className="material-icons">loop</i></div>
        </div>
        <div className="diode">
          <div className="laser"></div>
        </div>
      </div>
    );
  }
}
