/**
 * Created by zhengxiuming on 2017/6/30.
 */

import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './Form.less';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: '上海',
    label: '上海',
    children: [{
      value: '浦东',
      label: '浦东',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  },
  {
    value: '北京',
    label: '北京',
    children: [{
      value: '天安门',
      label: '天安门',
      children: [{
        value: '故宫',
        label: '故宫',
      }],
    }],
  }
];


class FormPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 60}}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    const columns = [
      {
        title: '属性',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title:'值',
        dataIndex:'value',
        key:'value'
      }
    ];

    return (
      <div style={{background: '#fff', padding: '80px 20px'}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '这个E-mail不是有效的!',
              }, {
                required: true, message: '请输入您的E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入您的密码!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入您的密码!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              昵称&nbsp;
                <Tooltip title="你想让别人如何去称呼您?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('nickname', {
              rules: [{required: true, message: '请输入您的昵称!', whitespace: true}],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="所在区域"
          >
            {getFieldDecorator('residence', {
              initialValue: ['上海', '江苏', '北京'],
              rules: [{type: 'array', required: true, message: '请选择您所在城市!'}],
            })(
              <Cascader options={residences}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号"
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: '请输入您的电话号码!'}],
            })(
              <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="网址"
          >
            {getFieldDecorator('website', {
              rules: [{required: true, message: '请输入您的网址!'}],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
            extra="我们必须确认你是一个人类"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{required: true, message: '请输入您收到的短信验证码!'}],
                })(
                  <Input size="large"/>
                )}
              </Col>
              <Col span={12}>
                <Button size="large">获取验证码</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{marginBottom: 8}}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已经阅读 <a href="">协议</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">注册</Button>
          </FormItem>
        </Form>
        <div style={{margin: '20px 100px'}}>
          <Card bordered={true} style={{minHeight: "400px"}}>
            <Table dataSource={tableData} columns={columns} />
          </Card>
        </div>
      </div>
    );
  }
}
function mapStateToProps() {
  return {}
}
const WrappedRegistrationForm = Form.create()(FormPage);
export default connect(mapStateToProps)(WrappedRegistrationForm);
