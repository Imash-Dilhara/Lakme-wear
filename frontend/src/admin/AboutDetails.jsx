import { useState } from 'react';

import './aboutDetails.css';

const placeholder = {
    storeAddress : 'Galle Road, Gintota, Galle',
    email: 'Lakmewear@gmail.com',
    phoneNumber: '+94 77 051 0090'
};

export default function About(){

    const [isChanged , setIsChanged] = useState(false);

    const [aboutDetails , setAboutDetails] = useState({
        email:'',
        phoneNumber:'',
        storeAddress:'',
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setAboutDetails((prev) => ({...prev , [name]:value}));
        setIsChanged(true);
    }

    const handleSaveAdminDetials = () => {
        if(isChanged){
            alert("Admin Changes save !");
            setIsChanged(false);
        }
    };

    const handleClearADminDetails = () => {
        setIsChanged(false);
        setAboutDetails({
            email:'',
            phoneNumber:'',
            storeAddress:'',
        });
    };

    return <div className="about-main-box" id='about-details'>
        <h1>About Details</h1>

        <div className="about-content-box">
            <div className="about-details">
                <label htmlFor="admin-email">Email</label>
                <span> : </span>
                <input 
                    type="email" 
                    id="admin-email" 
                    name='email' 
                    placeholder={placeholder.email}
                    value={aboutDetails.email}
                    onChange={handleChange}/>
            </div>
            <div className="about-details">
                <label htmlFor="admin-telNo">Phone number</label>
                <span> : </span>
                <input 
                    type="tel" 
                    id="admin-telNo" 
                    name='phoneNumber' 
                    placeholder={placeholder.phoneNumber}
                    onFocus={() => {
                        if(aboutDetails.phoneNumber === '') setAboutDetails({...aboutDetails , phoneNumber: '+94'});
                    }}
                    value={aboutDetails.phoneNumber}
                    onChange={handleChange}/>
            </div>
            <div className="about-details">
                <label htmlFor="admin-address">Store Address</label>
                <span> : </span>
                <input 
                    type="text" 
                    id="admin-address" 
                    name='storeAddress' 
                    placeholder={placeholder.storeAddress}
                    value={aboutDetails.storeAddress}
                    onChange={handleChange}/>
            </div>
            <div className="btn-field">
                <button className="clear-btn" onClick={handleClearADminDetails}>Clear</button>
                <button className="save-btn" onClick={handleSaveAdminDetials}>Save</button>
            </div>
        </div>
    </div>
}