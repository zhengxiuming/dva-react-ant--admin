import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import MainLayout from '../components/MainLayout/MainLayout';

function Home({location,routes,params,route}) {
  return (
    <MainLayout location={location} routes={routes} params={params} route={route}>
      <div>
        this is Home
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

export default connect(mapStateToProps)(Home);
