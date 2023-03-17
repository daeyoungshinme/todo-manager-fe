import React from 'react';
import { Frame, Card } from '@components';

const WorkList = ({ Title }) => {
  const workList = [1, 2, 3, 4, 5, 6, 7].map(work => {
    return <Card key={work} data={work} />;
  });

  return (
    <Frame CN="work_area">
      <div className="work_info">
        <h2>{Title}</h2>
        {Title === 'TO DO' && <button>추가</button>}
      </div>
      <Frame CN="list">{workList}</Frame>
    </Frame>
  );
};

export default WorkList;
