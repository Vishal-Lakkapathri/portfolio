import React from 'react';
import { Icon } from 'antd';

import aboutMe from '../../../../../assets/doodles/all-about-me.png';

const lineOne = 'I have 3 years of experience in Software Development for Online Auction, Re marketing based and Telecommunication Company.';
const lineTwo = 'The Initial Year of my professional life I was a Selenium Automation Tester, post apocalypse JS and React had pulled me in the Front End Development. I have worked with libraries such as Redux, WIX Navigation For React Native, Ramda JS aaand a few more!!';
const lineThree = 'Outside work I love many things such as Rajinikanth, dogs, music and ofcourse Game of Thrones any given time.';


const AboutMeImage = ({ imageSource }: string) => (
  <div className="w-4/5">
    <img
      src={imageSource}
      alt="About Me"
    />
  </div>
);

const AboutMe = () => (
  <div className="pl-4">
    <p className="aboutMeFont">
      {lineOne}
      <br />
      {lineTwo}
      <br />
      {lineThree}
    </p>
  </div>
);

const NewIcon = ({ iconType, iconTitle, twoToneColor, value }: string) => (
  <div className="flex flex-row items-center items-start">
    <Icon type={iconType} theme="twoTone" twoToneColor={twoToneColor} style={{ fontSize: '34px' }} />
    <h1 className="pl-3 font-sans text-lg text-grey-darkest">
      {`${iconTitle}: `}
    </h1>
    <p className="pl-3 font-sans text-lg text-grey-darkest">{value}</p>
  </div>
);

export const AboutMeView = () => (
  <div className="flex flex-col items-center">
    <div className="flex pb-5 items-center">
      <AboutMeImage imageSource={aboutMe} />
      <AboutMe />
    </div>
    <div className="border w-3/4 border-red" />
    <div className="flex flex-row pt-5 w-3/4 pl-32">
      <div className="w-1/2 justify-start">
        <NewIcon
          iconType="environment"
          iconTitle="Location"
          twoToneColor="#12c2e9"
          value="Hyderabad"
        />
      </div>
      <div className="w-1/2 justify-start">
        <NewIcon
          iconType="heart"
          iconTitle="Age"
          twoToneColor="#eb2f96"
          value="25 yrs"
        />
      </div>
    </div>
    <div className="flex flex-row pt-5 w-3/4 pl-32">
      <div className="w-1/2 justify-start">
        <NewIcon
          iconType="phone"
          iconTitle="Phone"
          twoToneColor="#c471ed"
          value="+91 9030057697"
        />
      </div>
      <div className="w-1/2 justify-start">
        <NewIcon
          iconType="mail"
          iconTitle="Mail"
          twoToneColor="#12c2e9"
          value="vishal.lakkapathri@gmail.com"
        />
      </div>
    </div>
  </div>
);
