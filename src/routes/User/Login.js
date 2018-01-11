import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Form, Input, Button, Icon, Checkbox, Alert } from 'antd';
import styles from './Login.less';
import CryptoJS from 'crypto-js'
const FormItem = Form.Item;

@connect(state => ({
  login: state.login,
}))
@Form.create()
export default class Login extends Component {
  state = {
    count: 0,
    type: 'account',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.status === 'ok') {
      this.props.dispatch(routerRedux.push('/'));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }




  handleSubmit = (e) => {
    e.preventDefault();
    const { type } = this.state;
    // this.props.form.validateFields({ force: true },
    //   (err, values) => {
    //     const sha1 = CryptoJS.SHA1;
    //     values.password = sha1(values.password).toString().toUpperCase();
    //     if (!err) {
    //       this.props.dispatch({
    //         type: `login/${type}Submit`,
    //         payload: {
    //           ...values,
    //           cb: () => {
    //             this.props.dispatch(routerRedux.push('/dashboard'));
    //           }
    //         },
    //       });
    //     }
    //   }
    // );
    this.props.dispatch(routerRedux.push('/index'));
  }

  renderMessage = (message) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type="error"
        showIcon
      />
    );
  }

  render() {
    const { form, login } = this.props;
    const { getFieldDecorator } = form;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
              {
                login.status === 'error' &&
                login.type === 'account' &&
                login.submitting === false &&
                this.renderMessage('账户或密码错误')
              }
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{
                    required: type === 'account', message: '请输入账户名！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="输入手机号/邮箱"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: type === 'account', message: '请输入密码！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="输入密码"
                  />
                )}
              </FormItem>

          <FormItem className={styles.additional}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
            )}
            <a className={styles.forgot} href="javascript:;">忘记密码</a>
            <Button size="large" loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
