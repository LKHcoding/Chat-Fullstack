import React, { useCallback } from 'react';
import { Container, Header } from '@pages/Channel/styles';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';

const Channel = () => {
  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log('submit');
    setChat('');
  }, []);
  return (
    // children 을 사용하는 방식 -> Workspace태그 사이에 있는 애들이
    // Workspace안에 prop -> children 으로 받아와서 사용 가능
    // <Workspace>
    // <div>채널 페이지</div>
    // </Workspace>
    <Container>
      <Header>채널!</Header>
      {/* <ChatList /> */}
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default Channel;
