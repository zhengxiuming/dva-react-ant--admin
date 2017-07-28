/**
 * Created by zhengxiuming on 2017/7/21.
 */
const Mock = require('mockjs');
const Random = Mock.Random;

let id = 0;
const standardList = Mock.mock({
  'data|100': [
    {
      id(){
        id += 1;
        return id + 10000;
      },
      'status|1-2':1,
      title:'@title',
      author:'@last',
      categories:'@word',
      tags:'@word',
      'views|10-200':1,
      'comments|10-200':1,
      visibility:()=>{
        return Mock.mock('@pick(["Public",'+'"Password protected",'+'"Private"])')
      },
      date:'@dateTime',
      image(){
        return Random.image('100x100',Random.color(),'#757575','png',this.author.substr(0,1))
      }
    }
  ]
});

module.exports = {
  [`GET /table/standard`] (req, res){
    res.status(200).json({      //将请求json格式返回
      success: true,
      standardList,
    });
  }
};
