import React from 'react';

export const Intro = ({ message, name }: string) => (
  <h1
    className="text-white font-mono text-center pt-32"
  >
    {`${message}
    ${name}`}
  </h1>
);
