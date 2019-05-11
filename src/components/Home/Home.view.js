import React, { Component } from 'react';

import { Intro } from './components/IntroMessage';
import { TopBar } from './components/TopBar';
import { AboutMeView } from './components/AboutMe';
import { SkillsList } from './components/Skills';
import StudyTimeLine from './components/StudyTimeLine';

export default class DemoApp extends Component {
  render() {
    return (
      <div>
        <div className="parallaxLinearGradient p-3 flex flex-col">
          <TopBar />
          <Intro
            message="Hello there!! Welcome"
            name="I`m a front End Developer"
          />
        </div>
        <div className="py-10 px-4">
          <AboutMeView />
        </div>
        <div className="pb-24 pt-4">
          <StudyTimeLine />
        </div>
        <div className="py-10">
          <SkillsList />
        </div>
      </div>
    );
  }
}
