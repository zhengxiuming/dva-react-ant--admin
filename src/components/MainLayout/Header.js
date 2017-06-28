import React from 'react';
import styles from './Header.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {Header,Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Headers({location,collapsed,toggle,onHandleClick}) {
  function logout(e) {
    if(e.key=='setting:4'){
      //调用父级的方法
      onHandleClick();
    }
  }
  return (
    <div className={styles.normal}>
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon style={{float:"left"}}
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
      <Menu style={{float:"right",marginTop:'16px',marginRight:"16px"}}
            mode="horizontal" onClick={logout.bind()}
          >
            <SubMenu title={<span><Icon type="user" />个人信息</span>}>
              <MenuItemGroup title="用户中心">
                <Menu.Item key="setting:1">个人信息</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="用户设置">
                <Menu.Item key="setting:2">个人设置</Menu.Item>
                <Menu.Item key="setting:3">用户设置</Menu.Item>
              </MenuItemGroup>
              <Menu.Item key="setting:4">退出</Menu.Item>
            </SubMenu>
        </Menu>
    </Header>
    </div>
  );
}

export default Headers;
