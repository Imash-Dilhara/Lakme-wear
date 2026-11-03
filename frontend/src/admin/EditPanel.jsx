import { useState } from "react";

import './editPanel.css';

export default function EditPanel({setSelectedDesign , selectedDesign}){

    const typeOfWear = [
        {id:1 , value: 'Casual Wear'},
        {id:2 , value: 'Party Wear'},
        {id:3 , value: 'Office Wear'},
    ];

    const banner = [
        {id:1 , banner: 'None'},
        {id:2 , banner: 'NEW'},
        {id:3 , banner: 'BEST SELLER'},
    ];

    const handleChanges = (e) => {
        const {name , value} = e.target;
        setSelectedDesign((prev) => ({...prev , [name]: value}));
    }

    const handleChnageDesignDetails = () => {
        alert('Design details changed successfully');
    }

    const handleRemove = () => {
        setSelectedDesign(null);
    }

    return <div className='edited-content-box'>
        <label>Design name : </label>
        <input 
            type="text" 
            value={selectedDesign.name}
            onChange={handleChanges}
        />
        <br />

        <label htmlFor="designcategory">Design Type : </label>
        <select 
            name="designType" 
            id="designType" 
            value={selectedDesign.type}
            onChange={handleChanges}>
            {typeOfWear.map((type) => (
                <option 
                name='designType' 
                key={type.id} 
                value={type.value}
            >{type.value}
            </option>
            ))}
        </select>
        <br />

        <label htmlFor="price">Price : </label>
        <div>
            <span>Rs. </span>
            <input 
                name='price' 
                type="number" 
                value={selectedDesign.price}
                onChange={handleChanges}
            />
        </div>
        <br />

        <label htmlFor="banner">Banner : </label>
        <select 
            name="banner" 
            id="banner"
            value={selectedDesign.banner}
            onChange={handleChanges}
        >
            {banner.map((banner) => (
                <option key={banner.id} value={banner.banner}>{banner.banner}</option>
            ))}
        </select><br />

        {/* Button Field */}
        <div className="button-box">
            <button className='change-btn' onClick={handleChnageDesignDetails}>Change</button>
            <button className='remove-btn' onClick={handleRemove}>Remove</button>
        </div>
    </div>
}