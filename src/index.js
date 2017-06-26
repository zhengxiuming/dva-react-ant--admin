import dva from 'dva';
import './index.css';
import {browserHistory} from 'dva/router';
import { message } from 'antd';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  history:browserHistory,
  onError(e){
    message.error(e.message);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Models
app.model(require("./models/users"));
app.model(require("./models/Login"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
