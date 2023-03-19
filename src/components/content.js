import React, { useState } from 'react';
import { Frame, WorkList } from '@components';
import dummy from '../../assets/dummy_data';

const Content = () => {
  const [data, setData] = useState(dummy);

  const handleOnData = (event, newData) => {
    setData(newData);
    // console.log(newData);
  };

  return (
    <Frame CN="content">
      <div className="top_info">friend 2</div>
      <WorkList Title="TO DO" data={data} handleOnData={handleOnData} />
      <WorkList Title="In Progress" data={data} handleOnData={handleOnData} />
      <WorkList Title="Completed" data={data} handleOnData={handleOnData} />
    </Frame>
  );
};

export default Content;
