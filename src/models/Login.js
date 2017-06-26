import * as user from '../services/users';
import {queryURL} from '../utils/common';
import { routerRedux } from 'dva/router';
export default {
  namespace: 'Login',
  state: {

  },
  reducers: {
  },
  effects: {
    *fetch({payload:values},{put,call}){
      const {data} = yield call(user.login,values);
      if(data.success){
        const from=queryURL('from');
        if(from){
          yield put(routerRedux.push(from));
        }else{
          yield put(routerRedux.push('/Home'));
        }
      }else{
        throw data
      }
    }
  },
  subscriptions: {

  },
};
