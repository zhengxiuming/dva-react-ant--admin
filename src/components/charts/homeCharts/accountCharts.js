/**
 * Created by zhengxiuming on 2017/6/28.
 */
/**
 * Created by zhengxiuming on 2017/6/28.
 */
import { AreaChart, Area,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import React,{Component} from 'react';
import styles from './workCharts.less';
import classNames from 'classnames';

class AccountCharts extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='ant-card' style={{padding:'20px'}}>
        <div className={styles.title}>访问量统计</div>
        <ResponsiveContainer minHeight={308}>
          <LineChart data={this.props.data}>
            <XAxis dataKey="year" axisLine={{strokeWidth: 1 }} tickLine={false} />
            <YAxis/>
            <CartesianGrid vertical={true} strokeDasharray="5 5" stroke="#ccc"/>
            <Tooltip />
            <Line type="monotone" dataKey="pv" strokeWidth={1} stroke="#ffc658" stackId="2" fill='#ffc658'/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
AccountCharts.propTypes = {
  data: PropTypes.array,
};
export default AccountCharts;
