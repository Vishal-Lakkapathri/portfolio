import React from 'react';

const Tabs = ({ title }: string) => <h5 className="text-white fontGillSans">{title}</h5>;

export const TopBar = () => (
  <div className="displayFlex px-2 stickyHeader">
    <div className="w-2/3"><h2 className="text-white font-light">Vishal Lakkapathri</h2></div>
    <div className="displayFlex w-1/4 flex-item pt-3">
      <Tabs title="Home" />
      <Tabs title="About" />
      <Tabs title="Resume" />
      <Tabs title="Contact" />
    </div>
  </div>
);
