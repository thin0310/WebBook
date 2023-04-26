
import React from 'react';

export const Button = ({ text = 'Click me!', handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};