import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import 'antd/dist/antd.css'; // Import Ant Design styles

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Loginpage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Routing;