import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import Menubar from './menubar';
import FooterBar from './Footbar';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className='homebackground'> 
            <Menubar/>
            <div className="content-area">
                <div className="area area1">
                    <div className="area-content">
                        <h3>Donation Post</h3>
                        <button className='Hcreatebutton' onClick={() => navigate('/create')}>Create Donation</button>
                    </div>
                </div>
                <div className="area area2">
                    <div className="area-content"> 
                        <h3>Pick Up Processing</h3>
                    </div>
                </div>
                <div className="area area3">
                    <div className="area-content">
                        <h3>My Info</h3>
                        <button className='Hcreatebutton' onClick={() => navigate('/Userprofile')}>View My Info</button>
                    </div>
                </div>
            </div>

            <FooterBar/>
            
        </div>
    );
};

export default Homepage;
