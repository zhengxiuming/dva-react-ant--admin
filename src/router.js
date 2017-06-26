import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from "./routes/Home.js";
import Login from "./routes/Login.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/"  component={IndexPage}/>
      <Route path="/Home" component={IndexPage} />
      <Route path="/icon" component={Home} />
      <Route path="/loading" component={Home} />
      <Route path="/dialog" component={Home} />
      <Route path="/standard" component={Home} />
      <Route path="/highTable" component={Home} />
      <Route path="/barChart" component={Home} />
      <Route path="/pieChart" component={Home} />
      <Route path="/areaChart" component={Home} />
      <Route path="/form" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={Home} />
      <Route path="/Animation" component={Home} />
    </Router>
  );
}
export default RouterConfig;
