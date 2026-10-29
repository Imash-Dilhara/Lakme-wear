import { useState } from 'react';
import './dashboard.css';

const designsItems = [
    {id:1 , image: './test1.png' , name: 'Ivory Silk Gown' , price: 2400, type: 'Casual Wear' , banner: 'NEW'},
    {id:2 , image: './test2.png' , name: 'Cream Blazer Set' , price: 3500, type: 'Office Wear' , banner: 'BEST SELLER'},
];

export default function Dashboard({onDesignSelect , selectedDesign}){

    return <div className="dashboard-main-box" id='dashboard'>
        
        <div className='dashboard-to-show-box'>
            <h2>All Designs         : <span>6500</span></h2>
            <h2>Total Collection    : <span>120</span></h2>
            <h2>Total types         : <span>04</span></h2>
        </div>

        <h1>All Design</h1>
        <div className="dashboard-content-box">
            {designsItems.map((item) => (
                <div 
                    key={item.id}
                    onClick={() => {onDesignSelect(item)}}
                    className={`dashboard-image-box ${selectedDesign && selectedDesign.id===item.id ? 'active' : ''}`}
                >
                    <img className='dashboard-image' src={item.image} alt="Design Image" />
                </div>
            ))}
        </div>
    </div>
}