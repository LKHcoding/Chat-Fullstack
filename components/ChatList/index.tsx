import React, { RefObject, useCallback, VFC } from 'react';
import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IDM, IChat } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from '@components/Chat';

interface Props {
  chatSections: { [key: string]: (IDM | IChat)[] };
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  isEmpty: boolean;
  isReachingEnd: boolean;
  scrollRef: RefObject<Scrollbars>;
}
const ChatList: VFC<Props> = ({ chatSections, setSize, scrollRef, isEmpty, isReachingEnd }) => {
  const onScroll = useCallback((values) => {
    // 나중에 채팅리스트 위로 올렸을때 lazyLoading (과거 채팅들 스크롤에따라서 불러오는 동작)
    // 구현하기 위한 영역
    if (values.scrollTop === 0 && !isReachingEnd) {
      console.log('가장위');
      //data 추가 로딩
      setSize((prevSize) => prevSize + 1).then(() => {
        //스크롤 위치 유지
        if (scrollRef?.current) {
          scrollRef.current?.scrollTop(scrollRef.current?.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
