import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Main.css';
import { Layout, Menu, Icon } from 'antd';
import {MainLayout} from '../components';
import Login from './Login';
const {Content} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed:false,
      mode:'inline',
    };
    this.handleClick=this.handleClick.bind(this);
    this.falg=false;
  }
  toggle = () => {
    this.falg=!this.falg;
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.falg ? 'vertical' : 'inline',
    });
  };
  handleClick(){
    this.props.dispatch({
      type:'Main/logout'
    })
  }
  render(){
    const {Side,Header,Breadcrumb,Footer} = MainLayout;
    if(this.props.location.pathname=='/login'){
      return <Login/>;
    }
    return (
      <div className={styles.normal}>
        <Layout style={{height:"100%"}} className="ant-layout-has-sider">
          <Side collapsed={this.state.collapsed} location={location} mode={this.state.mode}/>
          <Layout>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} location={location} onHandleClick={this.handleClick}/>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb location={location} routes={this.props.routes} params={this.props.params} route={this.props.route}/>
              <div style={{ padding: 24, minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    )
  }
}
function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(Main);
