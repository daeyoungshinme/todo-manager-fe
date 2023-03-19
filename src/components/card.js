import React, { useState } from 'react';
import { Frame } from '@components';

const Card = ({ type, data, cardData, handleOnData }) => {
  const [txValue, setTxValue] = useState(cardData.item_todo);

  const handleOnCheck = event => {
    const move = data[type].reduce(
      (pre, work, i) => {
        if (work.id_todo === cardData.id_todo) {
          pre.index = i;
          pre.work = work;
        }
        return pre;
      },
      { index: -1, work: {} },
    );

    const moveKey = 'completed';
    const newData = { ...data, [type]: data[type].filter(work => work.id_todo !== move.work.id_todo) };
    newData[moveKey].push(move.work);

    handleOnData(event, newData);
  };

  const handleOnInprog = event => {
    const move = data[type].reduce(
      (pre, work, i) => {
        if (work.id_todo === cardData.id_todo) {
          pre.index = i;
          pre.work = work;
        }
        return pre;
      },
      { index: -1, work: {} },
    );
    // data[type].splice(move.index, 1);

    const moveKey = 'inprogress';
    const newData = { ...data, [type]: data[type].filter(work => work.id_todo !== move.work.id_todo) };
    newData[moveKey].push(move.work);

    handleOnData(event, newData);
  };

  const handleOnDelete = event => {
    const delIndex = data[type].reduce((pre, work, i) => {
      return work.id_todo === cardData.id_todo ? i : pre;
    }, -1);

    const newData = { ...data };
    newData[type].splice(delIndex, 1);

    handleOnData(event, newData);
  };

  const handleOnText = event => {
    const newValue = event.target.value;
    setTxValue(newValue);
    const newData = {
      ...data,
      [type]: [
        ...data[type].map(work => {
          if (work['id_todo'] === cardData['id_todo']) work.item_todo = newValue;
          return work;
        }),
      ],
    };

    handleOnData(event, newData);
  };

  //   const handleOnBlur = (a, b, c, d) => {
  //     console.log(a, b, c, d);
  //   };
  const checked = type === 'completed';
  return (
    <Frame CN="card">
      <div className="top">
        <input type="checkbox" onChange={handleOnCheck} checked={checked} />
        {['todo'].includes(type) ? (
          <button width="50px" onClick={handleOnInprog}>
            진행
          </button>
        ) : (
          <div />
        )}
        <button onClick={handleOnDelete}>삭제</button>
      </div>
      <input
        className="tx"
        type="text"
        value={txValue}
        onChange={handleOnText}
        //   onBlur={handleOnBlur}
      />
      <div>
        <a href="#">댓글 {data.cnt_comment}</a>
      </div>
    </Frame>
  );
};

export default Card;
