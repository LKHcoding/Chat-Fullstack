import React from 'react';
import { Container, Header } from '@pages/Channel/styles';

const Channel = () => {
  return (
    // children 을 사용하는 방식 -> Workspace태그 사이에 있는 애들이
    // Workspace안에 prop -> children 으로 받아와서 사용 가능
    // <Workspace>
    // <div>채널 페이지</div>
    // </Workspace>
    <Container>
      <Header>채널!</Header>
    </Container>
  );
};

export default Channel;
