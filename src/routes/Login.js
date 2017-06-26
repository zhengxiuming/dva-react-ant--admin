import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type:'Login/fetch',
          payload:values
        })
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.normal}>
        <div className={styles.content}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem
              hasFeedback
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入你的用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} onPressEnter={this.handleSubmit} placeholder="Username" />
              )}
            </FormItem>
            <FormItem
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className={styles.loginFormForgot} href="##">忘记密码</a>
              <Button loading={loading} type="primary" htmlType="submit" className={styles.loginFormButton}>
                登录
              </Button>
              <a href="##">现在去注册</a>
              <div style={{textAlign:'center'}}>
                <span style={{marginRight:"30px",color:"#ccc"}}>Username：admin</span>
                <span style={{color:"#ccc"}}>Password：123</span>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.Login);
  return {

  };
}

export default connect(mapStateToProps)(Form.create()(Login));
