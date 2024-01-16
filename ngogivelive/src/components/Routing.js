import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import RegisterPage from './RegisterPage'; 
import Homepage from './Homepage';
import 'antd/dist/antd.css'; // Import Ant Design styles

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Routing;