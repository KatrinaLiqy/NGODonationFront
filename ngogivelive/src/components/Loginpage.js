import { Button, Form, Input, message, Checkbox, notification, Tabs } from 'antd'
import './Loginpage.css';
import React, { useState } from 'react';
import { loginuser, loginadmin } from '../utils'

const { TabPane } = Tabs;
function Loginpage() {
  const [loading, setLoading] = useState(false)

  const onFinishUser = async (data) => {
    setLoading(true);
    try {
      await loginuser(data);
      notification.success({
        message: 'Login Successful',
        description: 'You have successfully logged in.',
      });
      // Redirect or further actions here after successful login
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: 'Failed to log in. Please check your credentials.',
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishAdmin = async (data) => {
    setLoading(true);
    try {
      await loginadmin(data);
      notification.success({
        message: 'Login Successful',
        description: 'You have successfully logged in.',
      });
      // Redirect or further actions here after successful login
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: 'Failed to log in. Please check your credentials.',
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
// UI of login
  const LoginForm = ({ onFinish }) => (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
        </Form.Item>

    </Form>
  );
  const tabItems = [
    {
      label: "User Login",
      key: "1",
      children: <LoginForm onFinish={onFinishUser} />,
    },
    {
      label: "Admin Login",
      key: "2",
      children: <LoginForm onFinish={onFinishAdmin} />,
    },
  ];
// return UI tab for dual login
  return (
    <div className="login-container">
      <Tabs items={tabItems} />
    </div>
  );
};

export default Loginpage