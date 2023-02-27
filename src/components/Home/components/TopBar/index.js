import React from 'react';
import moment from 'moment';

const vishalResume = 'https://tinyurl.com/vishalresumev9';

const Tabs = ({ title, handleOnClick }: { title: string, handleOnClick: Function }) => (
  <button
    type="button"
    className="text-white pr-4"
    onClick={handleOnClick}
  >
    {title}
  </button>
);

const DownloadResume = ({ title, onButtonPress }: { title: string, onButtonPress: Function }) => (
  <a
    href={vishalResume}
    download
  >
    <button
      type="button"
      onClick={onButtonPress}
      className="text-white"
    >
      {title}
    </button>
  </a>
);

export const TopBar = ({ onDownloadResume, navigateTo }: Function) => (
  <div className="flex stickyHeader items-center justify-between">
    <div><h2 className="text-white font-light">Vishal Lakkapathri</h2></div>
    <div><h2 className="text-white font-light">{moment().format('DD/MM/YYYY').toString()}</h2></div>
    <div>
      <Tabs
        title="Skills"
        handleOnClick={() => navigateTo('focusMySkills')}
      />
      <Tabs
        title="Contact"
        handleOnClick={() => navigateTo('focusAboutMe')}
      />
      <Tabs
        title="About Me"
        handleOnClick={() => navigateTo('focusAboutMe')}
      />
      <DownloadResume
        title="Download Resume"
        onButtonPress={onDownloadResume}
      />
    </div>
  </div>
);
