/**
 * Created by zhengxiuming on 2017/6/28.
 */

import request from '../utils/request';

//请求首页数据
export async function chartsFetch() {
  return request(`/charts`,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
