/**
 * Created by zhengxiuming on 2017/6/22.
 */
import request from '../utils/request';
//用户信息
export function fetch() {
  return request(`/users`);
}

//登录
export function login(values) {
  return request(`/user/login`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(values),
  })
}
