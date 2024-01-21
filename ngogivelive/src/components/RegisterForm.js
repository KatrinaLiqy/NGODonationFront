import React from 'react';
import { Form, Input, Button } from 'antd';

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
        rules={[{ required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Please enter a valid email!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="User Name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Contact Number"
        name="ContactNumber"
        rules={[{ required: true, message: 'Please input your Contact Number!' },
        { pattern: new RegExp(/^[0-9]{10,15}$/), message: 'Please enter a valid phone number!' }]}
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

export default RegisterForm;