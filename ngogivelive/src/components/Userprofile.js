import React from 'react';
import './UserProfile.css';
import Menubar from './menubar';
import FooterBar from './Footbar';
const UserProfile = () => {

    return (
        <div className='userbackground'>
            <Menubar/>
            <FooterBar/>
        </div>
    );
};

export default UserProfile;
