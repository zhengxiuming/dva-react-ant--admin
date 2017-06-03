import React,{Component} from 'react';
import styles from './MainLayout.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainLayout extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	collapsed:false,
	  	mode:'inline',
	  };
	  this.falg=false;
	}
	toggle = () => {
		this.falg=!this.falg;
	    this.setState({
	      collapsed: !this.state.collapsed,
	      mode: this.falg ? 'vertical' : 'inline',
	    });
	}
	render(){
		return (
			<div className={styles.normal}>
			  <Layout style={{height:"100%"}}>
			    <Sider
			      collapsed={this.state.collapsed}
			    >
			      <div className={styles.logo} />
			      <Menu theme="dark" mode={this.state.mode}>
			      	<Menu.Item key="1">
			          <Icon type="home" />
			          <span className="nav-text">首页</span>
			        </Menu.Item>
			      	<SubMenu
      	              key="sub1"
      	              title={<span><Icon type="dingding" /><span className="nav-text">UI</span></span>}
      	            >
      	              <Menu.Item key="2">Icon</Menu.Item>
      	              <Menu.Item key="3">Loading</Menu.Item>
      	              <Menu.Item key="4">Dialog</Menu.Item>
      	            </SubMenu>
      	            <SubMenu
      	              key="sub2"
      	              title={<span><Icon type="database" /><span className="nav-text">Table</span></span>}
      	            >
      	              <Menu.Item key="5">Standard</Menu.Item>
      	              <Menu.Item key="6">High Table</Menu.Item>
      	            </SubMenu>
      	            <SubMenu
      	              key="sub3"
      	              title={<span><Icon type="desktop" /><span className="nav-text">ReCharts</span></span>}
      	            >
      	              <Menu.Item key="7"><Icon type="bar-chart" />LineChart</Menu.Item>
      	              <Menu.Item key="8"><Icon type="pie-chart" />BarChart</Menu.Item>
      	              <Menu.Item key="9"><Icon type="area-chart" />AreaChart</Menu.Item>
      	            </SubMenu>
			        <Menu.Item key="10">
			          <Icon type="save" />
			          <span className="nav-text">Form</span>
			        </Menu.Item>
			        <SubMenu
      	              key="sub4"
      	              title={<span><Icon type="copy" /><span className="nav-text">Page</span></span>}
      	            >
      	              <Menu.Item key="11"><Icon type="solution" />Login</Menu.Item>
      	              <Menu.Item key="12"><Icon type="info-circle-o" />404</Menu.Item>
      	            </SubMenu>
			        <Menu.Item key="13">
			          <Icon type="android-o" />
			          <span className="nav-text">Animation</span>
			        </Menu.Item>
			      </Menu>
			    </Sider>
			    <Layout>
			      <Header style={{ background: '#fff', padding: 0 }}>
			        <Icon style={{float:"left"}}
			          className={styles.trigger}
			          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
			          onClick={this.toggle}
			        />
			        <Menu style={{float:"right",marginTop:'16px',marginRight:"16px"}}
		                onClick={this.handleClick}
		                selectedKeys={[this.state.current]}
		                mode="horizontal"
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
			      <Content style={{ margin: '0 16px' }}>
	                  <Breadcrumb style={{ margin: '12px 0' }}>
	                    <Breadcrumb.Item>User</Breadcrumb.Item>
	                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
	                  </Breadcrumb>
	                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
	                  </div>
	              </Content>
			      <Footer style={{ textAlign: 'center' }}>
			        Ant Admin ©2017 Created by 632281949@qq.com
			      </Footer>
			    </Layout>
			  </Layout>
			</div>
		)
	}
}
export default MainLayout;
