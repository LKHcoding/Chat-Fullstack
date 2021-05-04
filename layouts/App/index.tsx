import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

/**
 * 코드스플리팅 방식
 * -> 여기서 필요한 페이지 말고 나머지들을 다 import하는건 리소스낭비임
 * 그래서 필요한 페이지만 불러오는 라이브러리 loadable 을 이용하는것
 */
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/channel" component={Channel} />
      <Route path="/workspace/dm" component={DirectMessage} />
    </Switch>
  );
};

export default App;
