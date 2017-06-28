/**
 * Created by zhengxiuming on 2017/6/22.
 * @fetch 默认不带cookie，需要加上'credentials': 'include',才可以
 */
import request from '../utils/request';
//用户信息
export async function fetch() {
  return request(`/users`);
}

//登录
export async function login(values) {
  return request(`/user/login`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include',
    body:JSON.stringify(values),
  })
}
//登出
export async function logout() {
  return request(`/user/logout`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    'credentials': 'include',
  })
}
//请求用户信息
export async function query() {
  return request(`/user/query`,{
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include',
  })
}
