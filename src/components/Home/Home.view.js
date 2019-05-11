import React, { Component } from 'react';

import { Intro } from './components/IntroMessage';
import { TopBar } from './components/TopBar';
import { AboutMeView } from './components/AboutMe';
import { SkillsList } from './components/Skills';
import StudyTimeLine from './components/StudyTimeLine';

export default class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.focusAboutMe = React.createRef();
    this.focusMySkills = React.createRef();
  }

  onNavigate = (divName: string) => {
    if (this[divName].current) {
      this[divName].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }

  render() {
    return (
      <div>
        <div className="parallaxLinearGradient p-3 flex flex-col">
          <TopBar
            navigateTo={this.onNavigate}
          />
          <Intro
            message="Hello there!! Welcome"
            name="I`m a front End Developer"
          />
        </div>
        <div className="py-10 px-4" ref={this.focusAboutMe}>
          <AboutMeView />
        </div>
        <div className="pb-24 pt-4" ref={this.focusMySkills}>
          <StudyTimeLine />
        </div>
        <div className="py-10">
          <SkillsList />
        </div>
      </div>
    );
  }
}
