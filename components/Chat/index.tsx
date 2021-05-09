import { IDM } from '@typings/db';
import React, { VFC } from 'react';
import gravatar from 'gravatar';
import { ChatWrapper } from '@components/Chat/styles';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';

interface Props {
  data: IDM;
}
const Chat: VFC<Props> = ({ data }) => {
  const { workspace } = useParams<{ workspace: string; channel: string }>();
  const user = data.Sender;

  // @[아이디](1)
  // \d 숫자, +는 1개 이상, ?는 0개 이상, g는 모두찾기
  // +?는 최대한 많이, +는 최대한 조금
  // [아이디]12](7) -> +면 아이디]12, +?면 아이디
  const result = regexifyString({
    input: data.content,
    pattern: /@\[(.+?)\]\((\d+?)\)|\n/g,
    decorator(match, index) {
      const arr = match.match(/@\[(.+?)\]\((\d+?)\)/)!;
      if (arr) {
        return (
          <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
            @{arr[1]}
          </Link>
        );
      }
      return <br key={index} />;
    },
  });
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
