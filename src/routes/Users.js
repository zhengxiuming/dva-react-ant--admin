import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import Layout from '../components/MainLayout/MainLayout';

function Users() {
  return (
    <div className={styles.normal}>
      Route Component: Users
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users:state
  };
}

export default connect(mapStateToProps)(Users);
