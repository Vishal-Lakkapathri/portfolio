import React, { Component } from 'react';

import { Intro } from './components/IntroMessage';
import { TopBar } from './components/TopBar';

export default class DemoApp extends Component {
  render() {
    return (
      <div className="rootContainer">
        <div className="parallaxLinearGradient p-3">
          <TopBar />
          <Intro
            message="Hello there!!"
            name=""
          />
        </div>
      </div>
    );
  }
}
