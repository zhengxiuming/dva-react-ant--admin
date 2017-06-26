import React from 'react';
import styles from './Breadcrumb.css';
import { Breadcrumb, Alert,Icon} from 'antd';

function Breadcrumbs({routes,params,location}) {
  const name=location.pathname.replace(/\//,"");
  return (
      <Breadcrumb>
        <Breadcrumb.Item href="/Home">
          <Icon type="home" />
          <span>Home</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>{name}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
  );
}
export default Breadcrumbs;
