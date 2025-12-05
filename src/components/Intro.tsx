import React from 'react';
import { ReactTyped } from 'react-typed';

const Intro: React.FC = () => {
  return (
    <div>
      <h1>Hello, I'm Amirali 👋</h1>
      <ReactTyped
        strings={[
          'Backend and Software Developer',
          'Open Source Enthusiast',
          'Node.js Nest Expert',
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};