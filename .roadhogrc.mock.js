/*
 * 加载mock数据，通过循环把在mock下的所有配置文件都拿到
 * */
const mock = {};
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function (file) {
  Object.assign(mock, require('./mock/' + file))
});
module.exports = mock;
