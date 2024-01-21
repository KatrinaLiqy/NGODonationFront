import { Button, Form, Input, Checkbox, notification, Tabs } from 'antd'
import './Loginpage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { loginuser, loginadmin } from '../utils'
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const onFinishUser = async (data) => {
    
    setLoading(true);
    try {
      await loginuser(data);
      notification.success({
        message: 'Login Successful',
        description: 'You have successfully logged in.',
      });
      navigate('/home');
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
      navigate('/home');
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
  const LoginForm = ({ onFinish, onFinishFailed,loading}) => (
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

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            <Link to="/home">Sign in</Link> 
            {/* link to home page need to delte the link, this way just easy go to home page*/}
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
    <div className='background'>
        {/* Tile and Register button  */}
        <div className="login-container">
          <div className="title-container">
            <div className="left-div">
              <div className="login-title">Welcome to NGO GIVE</div>
              <div className="login-title2">SIGN IN</div>
            </div>
            <div className="right-div">
              <div className="login-title3">No Account? <br/> <Link to="/register">Sign Up</Link>
            </div>
          </div>
         {/* SIGN IN TABLE */}
          </div>
            <Tabs items={tabItems} />
        </div>
    </div>
  );
};

export default Loginpage;