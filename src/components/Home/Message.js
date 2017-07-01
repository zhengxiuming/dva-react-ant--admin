/**
 * Created by zhengxiuming on 2017/6/29.
 */

import React,{Component} from 'react';
import styles from './Message.less';

class Message extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.container}>
        <img className={styles.photo} src={this.props.img_url} alt={this.props.title}/>
        <div className={styles.content}>
          <p className={styles.title}>{this.props.title}</p>
          <p className={styles.about}>{this.props.about}</p>
        </div>
      </div>
    )
  }
}
export default Message;
