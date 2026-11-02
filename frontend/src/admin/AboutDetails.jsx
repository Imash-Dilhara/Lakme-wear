import { useState } from 'react';

import './aboutDetails.css';

export default function About(){

    const [aboutdetails , setAboutDetails] = useState({
        storeAddress : 'Galle Road, Gintota, Galle',
        email: 'Lakmewear@gmail.com',
        phoneNumber: '+94 77 051 0090',
        link: {facebook:'#' , instagram:'#' , tiktok:'#'},
    });

    return <div className="about-main-box" id='about-details'>
        <h1>About Details</h1>

        <div className="about-content-box">
            
        </div>
    </div>
}