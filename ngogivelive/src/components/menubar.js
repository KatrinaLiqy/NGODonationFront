// Create a FooterBar component
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Menubar = () => {
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
                <span onClick={() => navigate('/home')}>Home</span>
                <span onClick={() => navigate('/Userprofile')}>Hi, UserName</span>
        </div>
    );
};

// Export the FooterBar component
export default Menubar;
