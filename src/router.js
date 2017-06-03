import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Home from "./routes/Home.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
      <Route path="/Home" component={Home} />
    </Router>
  );
}
export default RouterConfig;
