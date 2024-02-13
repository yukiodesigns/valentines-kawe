// components/AnimatedText.js
import React from 'react';
import Typist from 'react-typist';

const AnimatedText = ({ text }) => {
  return (
    <Typist>
      <span>{text}</span>
    </Typist>
  );
};

export default AnimatedText;
