import React, { useState } from 'react';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './RegisterPage.css';
import RegisterForm from './RegisterForm';

function RegisterPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
      setLoading(true);
      console.log('Success:', values);
      try {
        /* Uncomment this block to send data to backend 

        Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
        const response = await axios.post('YOUR_BACKEND_ENDPOINT', values);
        console.log('Server response:', response.data);
        */
        // Register user here
        message.success('Registration successful!', 2);
        navigate('/'); // back to login page
      } catch (error) {
        // Handle error here
        console.error('Registration failed:', error);
        message.error('Registration failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    const onFinishFailed = async (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  
    return (
        <div className='Rebackground'>
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
                    <RegisterForm 
                      onFinish={onFinish} 
                      onFinishFailed={onFinishFailed} 
                      loading={loading}/>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default RegisterPage;
