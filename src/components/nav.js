import React from 'react';
import { Frame } from '@components';

const Nav = () => {
  return (
    <Frame CN="nav">
      <div>
        <div className="logo">Todo Manager</div>
      </div>
      <Frame CN="category">
        <div>
          <a href="#">home</a>
        </div>
        <div>
          <a href="#">kanban</a>
        </div>
      </Frame>
      <Frame CN="sign">
        <div>
          <a href="#">sign in</a>
        </div>
        <div>
          <a href="#">sign up</a>
        </div>
      </Frame>
    </Frame>
  );
};

export default Nav;
