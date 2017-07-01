import {chartsFetch} from '../services/Home';

export default {
  namespace: 'Home',
  state: {
    Charts:{
      task:[],
      message:[],
      account:[],
      banner:[],
      title:[]
    }
  },
  reducers: {
    save(state,action){
      return {...state,...action.payload}
    }
  },
  effects: {
    *query({payload},{call,put}){
      const {data} = yield call(chartsFetch);
      yield put({
        type:'save',
        payload:{...data}
      })
    }
  },
  subscriptions: {
    setup({dispatch,location}){
      dispatch({
        type:'query'
      })
    }
  },
};
