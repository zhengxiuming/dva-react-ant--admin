import React,{Component} from 'react';
import {connect} from 'dva';
import styles from './Home.css';
import {Card, Col, Row,Timeline,Icon,Carousel,Table} from 'antd';
import PropTypes from 'prop-types'
import WorkCharts from  '../components/charts/homeCharts/workCharts';
import AccountCharts from '../components/charts/homeCharts/accountCharts';
import {HomeComponent,Charts} from '../components/';

class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {task,message,account,banner,title} =this.props.Charts;
    const {Message} = HomeComponent;
    const {MapCharts} =Charts;
    return(
      <div >
        <Row>
          <Col span='6'>
            <Card bordered={false}>
              <Icon type="star" style={{color:"#f44455",fontSize:'40px'}}/>
              <div className={styles.headline}>
                <h3>收藏</h3>
                <p>{Math.round(Math.random()*1000)}</p>
              </div>
            </Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}>
              <Icon type="camera" style={{color:"#6887ff",fontSize:'40px'}}/>
              <div className={styles.headline}>
                <h3>照片</h3>
                <p>{Math.round(Math.random()*10000)}</p>
              </div>
            </Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}>
              <Icon type="user" style={{color:"#6cc788",fontSize:'40px'}}/>
              <div className={styles.headline}>
                <h3>访问量</h3>
                <p>{Math.round(Math.random()*1000)}</p>
              </div>
            </Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}><Icon type="message" style={{fontSize:'40px',color:'orange'}}/>
              <div className={styles.headline}>
                <h3>消息</h3>
                <p>{Math.round(Math.random()*1000)}</p>
              </div>
            </Card>
          </Col>
        </Row>
        <WorkCharts data={task}/>
        <Row style={{marginTop:'20px'}}>
          <Col span="8">
            <Card>
              <div className={styles.info}>
                建站日志
                <p>已完成两个，正在开发首页</p>
              </div>
              <Timeline>
                <Timeline.Item color="green">Login 2017-06-26</Timeline.Item>
                <Timeline.Item color="green">Logout 2017-06-27</Timeline.Item>
                <Timeline.Item color="green">
                  <p>Home 2017-06-30</p>
                  <p>Home -> Card 2017-06-30</p>
                  <p>Home -> Charts 2017-06-30</p>
                  <p>Home -> Message 2017-06-30</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <p>ReCharts 2017-07-03</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <p>Form 2017-07-03</p>
                </Timeline.Item>
                <Timeline.Item color="red" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                  <p>Table 2017-07-21</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <div className={styles.info}>
                消息栏
              </div>
              {
                message.map((item)=>{
                  return (
                    <Message img_url={item.img_url} title={item.title} about={item.about} key={item.id}/>
                  )
                })
              }
            </Card>
          </Col>
          <Col span="8">
            <AccountCharts data={account}/>
          </Col>
        </Row>
        <Row>
          <Col span='12'>
            <Card style={{marginTop:'20px'}}>
              <div style={{fontSize:'16px',color:'#212121',marginBottom:'20px'}}>
                使用echarts-for-react模拟地图
              </div>
              <MapCharts />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{marginTop:'20px'}}>
              Meixianghao
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

// Home.propTypes={
//   Home:PropTypes.object
// };

function mapStateToProps(state) {
  const {Charts} = state.Home;
  return {
    loading: state.loading.models.Home,
    Charts
  };
}

export default connect(mapStateToProps)(Home);
