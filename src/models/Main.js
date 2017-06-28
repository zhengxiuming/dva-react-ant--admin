import {query, logout} from '../services/users';
import {routerRedux} from 'dva/router';
import {parse} from 'qs'
export default {
  namespace: 'Main',
  state: {
    user: {}
  },
  reducers: {
    querySuccess (state, {payload: user}) {
      return {
        ...state,
        user,
      }
    },
  },
  effects: {
    *query({payload}, {call, put}){
      const data = yield call(query);
      console.log('data', data.data);
      const loginStatus = data.data;
      if (loginStatus.success) {
        yield put({
          type: 'querySuccess',
          payload: loginStatus.user,
        });
        if (location.pathname === '/login') {
          yield put(routerRedux.push('/Home'));
        }
      } else {
        if ('/login'.indexOf(location.pathname) < 0) {
          window.location = `${location.origin}/login`
        }
      }
    },
    *logout({payload}, {call, put}){
      const data = yield call(logout);
      const logoutStatus = data.data;
      if (logoutStatus.success) {
        yield put({type: 'query'})
      } else {
        throw (logoutStatus)
      }
    }
  },
  subscriptions: {
    setup({dispatch}){
      dispatch({type: 'query'});
    }
  },
};
