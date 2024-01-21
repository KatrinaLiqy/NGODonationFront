import React, { useState } from 'react';
import './CreatedonationForm.css'; 

const CreateDonationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        donationItems: [],
        availableTime: '',
        donationSize: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [currentItem, setCurrentItem] = useState('');
    const handleAddItem = () => {
        if (currentItem) {
            setFormData(prevState => ({
                ...prevState,
                donationItems: [...prevState.donationItems, currentItem]
            }));
            setCurrentItem(''); 
        }
    };
    const handleRemoveItem = (itemToRemove) => {
        console.log('Form Data:', formData);
        const indexToRemove = formData.donationItems.indexOf(itemToRemove);
        setFormData(prevState => ({
            ...prevState,
            donationItems: prevState.donationItems.filter((_, index) => index !== indexToRemove)
        }));
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.contactNumber || formData.donationItems.length === 0 || !formData.availableTime || !formData.donationSize) {
            alert("Please fill in all the fields.");
            return;
        }
        // Handle form submission logic here
        console.log('Form Data:', formData);
        alert('Form submitted. Check the console to see the updated state.');
        setFormData({
            name: '',
            contactNumber: '',
            donationItems: [],
            availableTime: '',
            donationSize: ''
        });
    };
    
    return (
        <form onSubmit={handleSubmit} className="create-donation-form">
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Contact Number:
                <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Available Time:
                <input
                    type="text"
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <div className="custom-radio">
                Total Donation Size:
                <label>
                    <input
                        type="radio"
                        name="donationSize"
                        value="Shoebox"
                        checked={formData.donationSize === "Shoebox"}
                        onChange={handleInputChange}
                    /> Shoebox
                </label>
                <label>
                    <input
                        type="radio"
                        name="donationSize"
                        value="Microwave"
                        checked={formData.donationSize === "Microwave"}
                        onChange={handleInputChange}
                    /> Microwave
                </label>
                <label>
                    <input
                        type="radio"
                        name="donationSize"
                        value="WashingMachine"
                        checked={formData.donationSize === "WashingMachine"}
                        onChange={handleInputChange}
                    /> Washing Machine
                </label>
            </div>
            <br />
            <label>
                Donation Item:
                <input
                    type="text"
                    value={currentItem}
                    onChange={(e) => setCurrentItem(e.target.value)}
                />
                <button type="button" onClick={handleAddItem}>Add Item</button>
            </label>
            <ul className="donation-items-list">
                {formData.donationItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button type="button" onClick={() => handleRemoveItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <br />
            <button type="submit" className='sumbitbutton'>Submit</button>
        </form>
    );
};

export default CreateDonationForm;
