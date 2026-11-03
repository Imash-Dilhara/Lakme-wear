import { useState } from "react";

import './addEditPanel.css';

export default function AddEditPanel({addDesign , setAddDesign}) {

    const handleRemoveDesign = (index) => {
        const temp = addDesign.filter((item , i) => i !== index);

        setAddDesign(temp);
    }

    

    return <div className="add-design-to-editpanel-main-box">
        {addDesign.map((item , index) =>         
        <div key={index}>
            <div className="add-design0image-box">
                <img src={item.url} alt="selected Image" />
            </div>
            <div className="add-design-content-box">
                <p>Design name : <span>{item.designName}</span></p>
                <p>Price : <span>Rs.{item.price}</span></p>
                <p>Category : <span>{item.designType}</span></p>
                <p>Design name : <span>{item.designBanner}</span></p>
            </div>
            <div className="remove-btn-box">
                <button onClick={() => handleRemoveDesign(index)}>Remove</button>
            </div>
        </div>)}

        <hr className="edit-panel-line"/>

        <div className="btn-box">
            <button className="clr-btn">Clear All</button>
            <button className="submit-btn">Save All</button>
        </div>
    </div>
}