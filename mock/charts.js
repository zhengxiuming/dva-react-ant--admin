/**
 * Created by zhengxiuming on 2017/6/28.
 */
const Mock = require('mockjs');
const Random = Mock.Random;

const Charts= Mock.mock({
  'task|12':[
    {
      'year|+1':2006,
      'UI Task|10-100':1,
      'Model Task|10-100':1,
      'Control Task|10-100':1
    }
  ],
  title:[
    {
      'title':'收藏',
      'num|100-2000':1
    },
    {
      'title':'照片',
      'num|100-2000':1
    },
    {
      'title':'访问量',
      'num|100-2000':1
    },
    {
      'title':'消息',
      'num|100-2000':1
    }
  ],
  banner:[
    {
      bg:'http://www.07073.com/uploads/131218/17598465_104523_1.jpg'
    },
    {
      bg:'http://static.anfan.com/uploadfile/2014/1106/20141106020029791.jpg'
    },
    {
      bg:'http://www.duotegame.com/picfile/news/contents/2016/06/22/20160622102647193.jpg'
    },
    {
      bg:'http://pic1.win4000.com/wallpaper/f/530c0ece1a0e6.jpg'
    },
    {
      bg:'http://h.hiphotos.baidu.com/zhidao/pic/item/cc11728b4710b912dfa26cabc1fdfc0392452207.jpg'
    },
  ],
  message:[
    {
      img_url:'http://img3.imgtn.bdimg.com/it/u=2246417426,4108093914&fm=214&gp=0.jpg',
      title:'火影',
      id:'1',
      about:'我的梦想是成为火影！'
    },
    {
      img_url:'http://awb.img.xmtbang.com/img/uploadnew/201510/23/6ec69a83623e4b539a4e12363c40d697.jpg',
      title:'海贼王',
      id:'2',
      about:'我是要当海贼王的男人'
    },
    {
      img_url:'http://img1.imgtn.bdimg.com/it/u=390030284,2430003641&fm=26&gp=0.jpg',
      title:'死神',
      id:'3',
      about:'露琪亚。。'
    },
    {
      img_url:'http://img1.imgtn.bdimg.com/it/u=2419217150,1897494797&fm=21&gp=0.jpg',
      title:'妖精的尾巴',
      id:'4',
      about:'吃下去，力量就涌出来了'
    },
    {
      img_url:'http://img4.imgtn.bdimg.com/it/u=896007915,3167775287&fm=214&gp=0.jpg',
      title:'柯南',
      id:"5",
      about:'真相永远只有一个'
    }
  ],
  'account|6':[
    {
      'year|+1':2012,
      'pv|100-1000':1
    }
  ]
});

module.exports={
  [`GET /charts`] (req,res){
    res.status(200).json({      //将请求json格式返回
      success: true,
      Charts,
    });
  }
};
