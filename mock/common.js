/**
 * Created by zhengxiuming on 2017/6/22.
 */
'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中
let tableListData = {};

if (!global.tableListData) {
  const data = mockjs.mock({
    'data|1-100': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'mobile': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
      'avatar': () => {
        return Random.image('125x125');
      },
      'status|1-2': 1,
      'email': () => {
        return Random.email('visiondk.com');
      },
      'isadmin|0-1': 1,
      'created_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
      'updated_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}
const adminUsers = [
  {
    id: 0,
    username: 'admin',
    password: '123',
  }, {
    id: 1,
    username: 'test',
    password: 'test',
  }
];

module.exports = {
  //post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
  [`POST /user/login`] (req, res){
    const {username, password} = req.body;
    const user = adminUsers.filter((item)=>item.username === username);
    if (user.length > 0 && user[0].password === password) {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      res.cookie('token', JSON.stringify({id: user[0].id, deadline: now.getTime()}), {
        maxAge: 900000,
        httpOnly: true,
      });
      res.json({success: true, message: 'ok'});
    } else {
      res.status(400).end();
    }
  },
  [`GET /users`] (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    let newData = tableListData.data.concat();

    //数据开始模拟
    if (page.field) {
      const d = newData.filter((item) => {
        return item[page.filed].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length,
      };
    } else {
      data = tableListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      tableListData.page.current = currentPage * 1;

      newPage = {
        current: tableListData.page.current,
        total: tableListData.page.total,
      }
    }

    res.status(200).json({      //将请求json格式返回
      success: true,
      data,
      page: newPage.total,
    });
  }
};
