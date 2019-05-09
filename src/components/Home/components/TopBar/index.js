import React from 'react';

const vishalResume = '../../../../../assets/files/vishal-lakkapathri-resume.pdf';

const Tabs = ({ title }: { title: string }) => (
  <button
    type="button"
    className="text-white"
  >
    {title}
  </button>
);

const DownloadResume = ({ title, onButtonPress }: { title: string, onButtonPress: Function}) => (
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

export const TopBar = ({ onDownloadResume }: Function) => (
  <div className="flex px-2 stickyHeader items-center">
    <div className="w-2/3"><h2 className="text-white font-light">Vishal Lakkapathri</h2></div>
    <div className="displayFlex w-1/4 flex-item">
      <Tabs title="Home" />
      <Tabs title="About" />
      <Tabs title="Contact" />
      <DownloadResume
        title="Download Resume"
        onButtonPress={onDownloadResume}
      />
    </div>
  </div>
);
