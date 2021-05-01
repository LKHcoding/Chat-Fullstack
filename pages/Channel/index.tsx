import Workspace from '@layouts/Workspace';
import React from 'react';

const Channel = () => {
  return (
    // children 을 사용하는 방식 -> Workspace태그 사이에 있는 애들이
    // Workspace안에 prop -> children 으로 받아와서 사용 가능
    <Workspace>
      <div>로그인하신 것을 축하드립니다</div>
    </Workspace>
  );
};

export default Channel;
