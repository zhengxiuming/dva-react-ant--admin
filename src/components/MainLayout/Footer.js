import React from 'react';
import styles from './Footer.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {Footer} = Layout;

function Footers({location}) {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ant Admin ©2017 Created by 632281949@qq.com
    </Footer>
  );
}
export default Footers;
