import './addDesignCategory.css';
import axios from 'axios'

import { useState } from 'react';

const api_url = import.meta.env.VITE_API_URL;

export default function AddDesignCategory(){

    const [addingType , setAddingType] = useState('');
    const [types , setTypes] = useState([
        // 'Office Wear' , 
        // 'Formal Wear' , 
        // 'Sports Wear' , 
        'Lounge Wear' , 
        'Maternty Wear',
    ]);

    const handleCategory = async() => {
        if(addingType.trim() !== ''){
            setTypes([...types , addingType]);
            try{
                const response = await axios.post(`${api_url}/api/add-category` , {
                    categoryName: addingType
                });
                setAddingType('');
            }catch(e){
                console.error(e);
                alert('Some error to upload to DB!')
            }
        }
    }

    const handleRemoveCategory = async(type) => {
        try{
            if(confirm("Do you want to remove this category ? ")){
                const updateTypes = types.filter((item) => item !== type);
                
                const response = await axios.delete(`${api_url}/api/remove-category/${type}`)

                setTypes(updateTypes);
            }
        }catch(e){
            console.error('Remove Category : ',e);
            alert("Faild remove category!");
        }
    }

    return <div id="design-category" className="design-type-main-box">
        <h1>Design Category</h1>

        <div className="creat-type-content-box">
            <label htmlFor="createCategory">Create Design Category : </label>
            <input 
                id='createCategory' 
                value={addingType} 
                type="text" 
                placeholder='New design type...' 
                onChange={(e) => setAddingType(e.target.value)}
            />
            <button onClick={handleCategory}>+</button>
        </div>

        <div className="category-content-box">
            {types.map((type , index) => (
                <div key={index} className="type-box">
                    <div className="type-content-box">{type}</div>
                    <p onClick={() => handleRemoveCategory(type)}>X</p>
                </div>
            ))}
        </div>
    </div>
}