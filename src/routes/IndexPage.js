import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout'
function IndexPage() {
  return (
    <MainLayout location={location}>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
