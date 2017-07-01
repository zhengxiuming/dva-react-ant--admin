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
          registerModel(app, require('./models/Main'));
          cb(null, { component: require('./routes/Main') })
        }, 'Main')
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
        {
          path: 'barChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/charts/barChart'));
              cb(null, require('./routes/Charts/barChart'))
            }, 'barChart')
          },
        },
        {
          path: 'pieChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/charts/pieChart'));
              cb(null, require('./routes/Charts/pieChart'))
            }, 'pieChart')
          },
        },
        {
          path: 'lineChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/charts/lineChart'));
              cb(null, require('./routes/Charts/lineChart'))
            }, 'lineChart')
          },
        },
        {
          path: 'form',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/Form'));
              cb(null, require('./routes/Form'))
            }, 'Form')
          },
        }
      ],
    },
  ];
  return <Router history={history} routes={routes} />
};
export default Routers

