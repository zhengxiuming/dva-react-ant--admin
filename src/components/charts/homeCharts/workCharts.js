/**
 * Created by zhengxiuming on 2017/6/28.
 */
import { AreaChart, Area,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import React,{Component} from 'react';
import styles from './workCharts.less';
import classNames from 'classnames';

class WorkCharts extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={classNames({[styles.container]:true,'ant-card':true})}>
        <div className={styles.title}>Develop Progress Info</div>
        <ResponsiveContainer minHeight={360}>
        <AreaChart data={this.props.data}>
          <XAxis dataKey="year" axisLine={{strokeWidth: 1 }} tickLine={false} />
          <YAxis/>
          <CartesianGrid vertical={true} strokeDasharray="5 5" stroke="#ccc"/>
          <Tooltip />
          <Area type="monotone" dataKey="UI Task" strokeWidth={1} stroke="#8884d8" stackId="1" fill='#8884d8'/>
          <Area type="monotone" dataKey="Model Task" strokeWidth={1} stroke="#82ca9d" stackId="2" fill='#82ca9d'/>
          <Area type="monotone" dataKey="Control Task" strokeWidth={1} stroke="#ffc658" stackId="2" fill='#ffc658'/>
        </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
WorkCharts.propTypes = {
  data: PropTypes.array,
};
export default WorkCharts;
