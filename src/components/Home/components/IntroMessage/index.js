import React from 'react';

export const Intro = ({ message, name }: string) => (
  <div className="flex h-full justify-center items-center">
    <h1
      className="text-white font-mono"
    >
      {`${message}
      ${name}`}
    </h1>
  </div>
);
