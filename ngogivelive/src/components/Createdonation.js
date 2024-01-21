import React, { useState } from 'react';
import Menubar from './menubar';
import FooterBar from './Footbar';
import CreateDonationForm from './CreatedonationForm';
import './Createdonation.css';
function CreateDonation() {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        donationItems: [],
        availableTime: '',
        donationSize: ''
    });


    return (
        <div >
            <Menubar/>
            <div className='donationbackground'>
                <div className="Create-form-container">
                    <CreateDonationForm/>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
}

export default CreateDonation;
