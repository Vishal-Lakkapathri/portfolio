import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

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
            message="Hey there!! Welcome"
            name="I`m an Front End Developer mainly focusing on crafting a clean and readable code"
          />
          <div className="flex flex-col items-center">
            <FaAngleDoubleDown
              style={{ color: '#FFB6C1', fontSize: 40 }}
            />
            <p className="text-white">Scroll</p>
          </div>
        </div>
        <div className="py-10 px-4" ref={this.focusAboutMe}>
          <AboutMeView />
        </div>
        <div className="pb-24 pt-4">
          <StudyTimeLine />
        </div>
        <div className="py-10" ref={this.focusMySkills}>
          <SkillsList />
        </div>
      </div>
    );
  }
}
