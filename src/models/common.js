/**
 * Created by zhengxiuming on 2017/6/27.
 */
import * as user from '../services/users';
import {queryURL} from '../utils/common';
import { routerRedux } from 'dva/router';
export default {
  namespace: 'common',
  state: {

  },
  reducers: {
    fetchLogin(state,{payload:data}){
      return {...state,data}
    }
  },
  effects: {
    *fetch({payload:values},{put,call}){
      const {data} = yield call(user.login,values);
      yield put({
        type:'fetchLogin',
        payload:data
      });
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
