import React from 'react';
import {Router, Route} from 'dva/router';
import Main from "./routes/Main.js";


const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
};


const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: Main,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/Home'));
          cb(null, { component: require('./routes/Home') })
        }, 'Home')
      },
      childRoutes: [
        {
          path: 'Home',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/Home'));
              cb(null, require('./routes/Home'))
            }, 'Home')
          },
        },
        {
          path: 'Login',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/Login'));
              cb(null, require('./routes/Login'))
            }, 'Login')
          },
        },
      ],
    },
  ];
  return <Router history={history} routes={routes} />
};
export default Routers

