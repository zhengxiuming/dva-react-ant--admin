/**
 * Created by zhengxiuming on 2017/7/21.
 */

import React,{Component} from 'react';
import {connect} from 'dva';

class Standard extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

function mapStateToProps() {
  return{

  }
}

export default connect(mapStateToProps)(Standard);
