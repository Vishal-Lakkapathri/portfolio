import React from 'react';

const vishalResume = '../../../../../assets/files/vishal-lakkapathri-resume.pdf';

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
  <div className="flex stickyHeader items-center">
    <div className="w-2/3"><h2 className="text-white font-light">Vishal Lakkapathri</h2></div>
    <div className="flex justify-end pl-24">
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
