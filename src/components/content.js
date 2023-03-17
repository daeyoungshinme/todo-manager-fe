import React from 'react';
import { Frame, WorkList } from '@components';

const Content = () => {
  return (
    <Frame CN="content">
      <div className="top_info">friend2</div>
      <WorkList Title="TO DO" />
      <WorkList Title="In Progress" />
      <WorkList Title="Completed" />
    </Frame>
  );
};

export default Content;
