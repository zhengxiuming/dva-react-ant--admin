/**
 * Created by zhengxiuming on 2017/7/21.
 */

import request from '../utils/request';

//标准表格数据
export async function fetchStandard() {
  return request(`/table/standard`,{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include',
    body:JSON.stringify(values)
  })
}
