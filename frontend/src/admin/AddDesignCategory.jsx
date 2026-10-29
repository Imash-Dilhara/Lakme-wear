import './addDesignCategory.css';

import { useState } from 'react';

export default function AddDesignCategory(){

    const [addingType , setAddingType] = useState('');
    const [types , setTypes] = useState(['Casual Wear' , 'Party Wear' , 'Office Wear']);

    const handleCategory = () => {
        if(addingType.trim() !== ''){
            setTypes([...types , addingType]);
            setAddingType('');
        }
    }

    const handleRemoveCategory = (index) => {
        const updateTypes = types.filter((item) => item !== index);
        
        setTypes(updateTypes);
    }

    return <div id="design-category" className="design-type-main-box">
        <h1>Design Category</h1>

        <div className="creat-type-content-box">
            <label htmlFor="createCategory">Create Design Category : </label>
            <input id='createCategory' value={addingType} type="text" placeholder='New design type...' onChange={(e) => setAddingType(e.target.value)}/>
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