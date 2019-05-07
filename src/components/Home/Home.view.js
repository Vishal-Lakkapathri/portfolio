import React, { Component } from 'react';

import { Intro } from './components/IntroMessage';
import { TopBar } from './components/TopBar';
import { AboutMeView } from './components/AboutMe';

export default class DemoApp extends Component {
  render() {
    return (
      <div className="rootContainer">
        <div className="parallaxLinearGradient p-3 flex flex-col">
          <TopBar />
          <Intro
            message="Hello there!!"
            name=""
          />
        </div>
        <div className="flex flex-row p-4">
          <AboutMeView />
        </div>
      </div>
    );
  }
}
