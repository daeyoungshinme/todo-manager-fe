import React from 'react';
import { Frame, Card } from '@components';

const WorkList = ({ Title, data, handleOnData }) => {
  const key = {
    'TO DO': 'todo',
    'In Progress': 'inprogress',
    Completed: 'completed',
  };

  const workList = data[key[Title]].map(work => {
    return <Card key={work.id_todo} type={key[Title]} data={data} cardData={work} handleOnData={handleOnData} />;
  });

  const handleOnChange = event => {
    // 신규 추가
    console.log(event.target);
  };

  return (
    <Frame CN="work_area">
      <div className="work_info">
        <h2>{Title}</h2>
        {Title === 'TO DO' && <button onClick={handleOnChange}>추가</button>}
      </div>
      <Frame CN="list">{workList}</Frame>
    </Frame>
  );
};

export default WorkList;
