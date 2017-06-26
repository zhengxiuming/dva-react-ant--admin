import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout'
import { Card, Col, Row} from 'antd';
function IndexPage({location,routes,params,route}) {
  return (
    <MainLayout location={location} routes={routes} params={params} route={route}>
      <div >
        <Row>
          <Col span='6'>
            <Card bordered={false}>收藏</Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}>照片</Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}>访问量</Card>
          </Col>
          <Col span='6'>
            <Card bordered={false}>消息</Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

function mapStateToProps(state) {
  const {data} = state.users;
  return {
    loading:state.loading.models.users,
    data
  };
}

export default connect(mapStateToProps)(IndexPage);
