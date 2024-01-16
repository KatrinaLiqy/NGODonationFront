import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const RegisterForm = ({ onFinish, onFinishFailed, loading }) => (
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="ContactNumber"
            name="ContactNumber"
            rules={[{ required: true, message: 'Please input your Contact Number!' }]}
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
      
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>

      
        </Form>
      );

    return (
        <div className='background'>
            <div className="login-container">
                    <div className="title-container">
                        <div className="left-div">
                            <div className="login-title">Welcome to NGO GIVE</div>
                            <div className="login-title2">SIGN UP</div>
                        </div>
                        <div className="right-div">
                            <div className="login-title3">Have an account?<br/> <Link to="/">Sign In</Link>
                        </div>
                    </div>
            </div>
            <div className="form-container">
                <div className="form-div">
                    <RegisterForm />
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default RegisterPage;
