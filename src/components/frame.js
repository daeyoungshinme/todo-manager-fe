import React from 'react';

const Frame = ({ CN, children }) => {
  return <div className={CN || 'frame'}>{children}</div>;
};

export default Frame;
