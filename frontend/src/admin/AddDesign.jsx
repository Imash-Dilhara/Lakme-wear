import './addDesign.css';

import { useState } from 'react';

const banners = ['NEW' , 'BEST SELLER' , 'DISCOUNT' , 'SOLD OUT' , 'LIMITED EDITION' , 'TRENDING' , 'PRE-ORDER' , 'RESTOCKED' , 'CLEARANCE' , 'ONLY A FEW LEFT'];
const designTypes = ['Casual Wear' , 'Party Wear' , 'Office Wear' , 'Formal Wear' , 'Sports Wear' , 'Lounge Wear' , 'Maternty Wear'];

export default function AddDesign(){

    const [uplaodImage , setUploadImage] = useState(null);
    const [previewURL , setPreviewURL] = useState(null);
    const [addDesignDetails , setAddDesignDetails] = useState({
        designName: '',
        price: 0.00,
        designType: designTypes[0],
        designBanner: 'None',
    });

    const handleUploadImage = (e) => {
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];

            setUploadImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    }

    const handleChangeDesignDetails = (e) => {
        const {name , value} = e.target;

        setAddDesignDetails(prev => ({
            ...prev,
            [name] : value
        }));
    }

    const handleClearBtn = () => {
        setUploadImage(null);
        setPreviewURL(null);
        setAddDesignDetails({designName: '' , price: 0.00 , designType: designTypes[0] , designBanner: 'None',});
    }

    const handleAddDesign = () => {
        if(addDesignDetails.designName.trim() !== '' && addDesignDetails.price !== 0.00 && uplaodImage){
            console.log("Add Design Details : " ,uplaodImage.name,addDesignDetails);
        }
    }

    return <div id='addNew-design' className="add-design-main-box">
        <h1>Upload Design</h1>
        <div className="content-box">
            <div
                className="image-box"
            >
                <label 
                    htmlFor="uploadDesignImage"
                    style={{backgroundImage : previewURL ?  `url(${previewURL})` : 'none' ,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: previewURL ? 'none' : '',
                        boxShadow: previewURL ? `var(--shadow-strong)` : ''
                    }}
                    >
                        {uplaodImage ? uplaodImage.name : 'Upload New Design'}
                    </label>
                <input 
                    type="file"
                    id='uploadDesignImage'
                    name='uploadDesignImage'
                    onChange={handleUploadImage} />                
            </div>

            <div className="design-details-box">
                {/* Design Name Field */}
                <div className='design-info-box'>
                    <label htmlFor="designName">Design Name</label>
                    <span> : </span>
                    <input 
                        type="text" 
                        id='designName' 
                        name='designName' 
                        value={addDesignDetails.designName}
                        onChange={handleChangeDesignDetails}/>
                </div>
                {/* Price Field */}
                <div className='design-info-box'>
                    <label htmlFor="price">price (Rs.)</label>
                    <span> : </span>
                    <input 
                        type="number" 
                        id='price' 
                        name='price' 
                        value={addDesignDetails.price}
                        onChange={handleChangeDesignDetails}/>
                </div>
                {/* Design Type */}
                <div className='design-info-box'>
                    <label htmlFor="designType">Design Type</label>
                    <span> : </span>
                    <select 
                        name="designType" 
                        id="designType"
                        value={addDesignDetails.designType}
                        onChange={handleChangeDesignDetails}>
                        {designTypes.map((type , index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                {/* Design Banner */}
                <div className='design-info-box'>
                    <label htmlFor="designBanner">Banner Type</label>
                    <span> : </span>
                    <select 
                        name="designBanner" 
                        id="designBanner"
                        value={addDesignDetails.designBanner}
                        onChange={handleChangeDesignDetails}>
                        <option value="none">None</option>
                        {banners.map((banner , index) => (
                            <option key={index} value={banner}>{banner}</option>
                        ))}
                    </select>
                </div>
                <div className='btn-box'>
                    <button className="clear-design-btn" onClick={handleClearBtn}>Clear</button>
                    <button className="add-design-btn" onClick={handleAddDesign}>Add Design</button>
                </div>
            </div>
        </div>
    </div>
}