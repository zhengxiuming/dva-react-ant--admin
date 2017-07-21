# dva-react-ant--admin

简介： 一个使用了dva、ant-design和react等其他包的管理后台脚手架

### 相关工具

1、react

2、dva

3、ant-Design

### 本地开发

1、git clone https://github.com/zhengxiuming/dva-react-ant--admin.git

2、npm install 或 yarn install 

3、npm start

### 编译打包

npm build

### 项目中遇到的问题

1、fetch本身是接受不到cookie,需要在请求的时候加上 'credentials': 'include'

2、model里的state必须初始化一下我们获取到的数据类型，否则在渲染页面会属性为'undefined'


