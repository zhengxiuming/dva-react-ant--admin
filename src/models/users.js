import * as user from '../services/users';

export default {
  namespace: 'users',
  state: {
  },
  reducers: {
    save(state,{payload:data}){
      return {...state,data}
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const data = yield call(user.fetch,payload);
      yield put({
        type:'save',
        payload:{data}
      })
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      console.log('=-=-=-=')
      return history.listen(({pathname,query})=>{
        if(pathname==='/Home'){
          dispatch({type:'fetch',payload:query})
        }
      })
    }
  },
};
