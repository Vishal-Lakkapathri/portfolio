import React from 'react';
import { Icon } from 'antd';

import aboutMe from '../../../../../assets/doodles/all-about-me.png';

const message = 'Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.';

const AboutMeImage = () => (
  <div>
    <img
      src={aboutMe}
      alt="About Me"
    />
  </div>
);

const AboutMe = () => (
  <div className="pl-4">
    <p>
      {message}
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
    <div className="flex pb-5">
      <AboutMeImage />
      <AboutMe />
    </div>
    <div className="border w-3/4" />
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
          iconTitle="E-mail"
          twoToneColor="#12c2e9"
          value="vishal.lakkapathri@gmail.com"
        />
      </div>
    </div>
  </div>
);
