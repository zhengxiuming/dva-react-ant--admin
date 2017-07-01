import React from 'react';
import styles from './Side.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'dva/router';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function Side({location,collapsed,mode}) {
  return (
      <Sider
        collapsed={collapsed}
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode={mode} selectedKeys={[location.pathname]}>
          <Menu.Item key="/Home">
            <Link to="/Home">
              <Icon type="home" />
              <span className="nav-text">首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
                  key="sub1"
                  title={<span><Icon type="dingding" /><span className="nav-text">UI</span></span>}
                >
                  <Menu.Item key="/icon">
                  <Link to="/icon">
                    Icon
                  </Link>
                  </Menu.Item>
                  <Menu.Item key="/loading">
                    <Link to="/loading">
                      Loading
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/dialog">
                    <Link to="/dialog">
                      Dialog
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><Icon type="database" /><span className="nav-text">Table</span></span>}
                >
                  <Menu.Item key="/standard">
                    <Link to="/standard">
                      Standard
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/highTable">
                    <Link to="/highTable">
                      High Table
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={<span><Icon type="desktop" /><span className="nav-text">ReCharts</span></span>}
                >
                  <Menu.Item key="/barChart">
                    <Link to="/barChart">
                      <Icon type="bar-chart" />
                      BarChart
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/pieChart">
                    <Link to="/pieChart">
                      <Icon type="pie-chart" />
                      PieChart
                    </Link>
                    </Menu.Item>
                  <Menu.Item key="/lineChart">
                    <Link to="/lineChart">
                      <Icon type="line-chart" />
                      LineChart
                    </Link>
                  </Menu.Item>
                </SubMenu>
          <Menu.Item key="/form">
            <Link to="/form">
              <Icon type="save" />
              <span className="nav-text">Form</span>
            </Link>
          </Menu.Item>
          <SubMenu
                  key="sub4"
                  title={<span><Icon type="copy" /><span className="nav-text">Page</span></span>}
                >
                  <Menu.Item key="/login">
                    <Link to="/login">
                      <Icon type="solution" />
                      Login
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/error">
                    <Link to="/error">
                      <Icon type="info-circle-o" />
                      404
                    </Link>
                  </Menu.Item>
                </SubMenu>
          <Menu.Item key="/Animation">
            <Link to="/Animation">
              <Icon type="android-o" />
              <span className="nav-text">Animation</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
  );
}

export default Side;
