import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from './loadable';
const Home = loadable(()=>import('pages/Home/Home'));
const Page1 = loadable(()=>import('pages/Page1/Page1'));
const Counter = loadable(()=>import('pages/Counter/Counter'));
const UserInfo = loadable(()=>import('pages/UserInfo/UserInfo'));
const NotFound = loadable(()=>import('pages/NotFound/NotFound'));
// import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1';
// import Counter from 'pages/Counter/Counter';
// import UserInfo from 'pages/UserInfo/UserInfo';
// import NotFound from 'pages/NotFound/NotFound';

const getRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/page1' component={Page1} />
    <Route path='/counter' component={Counter} />
    <Route path='/userinfo' component={UserInfo} />
    <Route component={NotFound} />
  </Switch>
);

export default getRouter;
