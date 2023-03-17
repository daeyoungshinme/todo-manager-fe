import React from 'react';
import { Frame } from '@components';

const Card = ({ data }) => {
  return (
    <Frame CN="card">
      <div className="top">
        <input type="checkbox" />
        <button width="50px">진행</button>
        <button>삭제</button>
      </div>
      <div>독서독서독서</div>
      <div>
        <a href="#">댓글 5</a>
      </div>
    </Frame>
  );
};

export default Card;
