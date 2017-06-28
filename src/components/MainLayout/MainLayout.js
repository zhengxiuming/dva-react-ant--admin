import React,{Component} from 'react';
import styles from './MainLayout.css';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import Side from './Side';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
const {Content} = Layout;
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
	};
  handleClick(){
    this.props.dispatch({
      type:'logout'
    })
  }
	render(){
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

export default connect(mapStateToProps)(MainLayout);
