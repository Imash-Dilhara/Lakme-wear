import './arrivalDesign.css';

import { useState } from 'react';

export default function ArrivalDesign(){

    const [uploadImage , setUploadImage] = useState(null);
    const [previewURL , setPreviewURL] = useState(null);

    const handleFile = (e) => {
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];
            setUploadImage(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleUploadFile = () => {
        setUploadImage(null);
        setPreviewURL(null);
    };
    
    return <div id='arrival-design' className="arrival-design-main-box">
        
        <h1>Arrival Design</h1>

        <div className="arrival-design-content-box">
            <label 
                htmlFor='uploadImage' 
                className="add-arrival-design-image-box"
                style={{
                        backgroundImage: previewURL ? `url(${previewURL})` : 'none',
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        border: previewURL ? 'none' : ''
                    }}>
                    
                    
                    {uploadImage ?  (<h2>File : {uploadImage.name}</h2>) : (<p>Upload Image for Arrival</p>)}
            </label>
            <input 
                id='uploadImage'
                name='uploadImage' 
                type="file" 
                accept='image/*'
                className='uploadImage'
                onChange={handleFile}/>

            <button onClick={handleUploadFile}>Add Arrival</button>
        </div>
    </div>
}