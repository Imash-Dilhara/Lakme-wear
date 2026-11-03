import './addEditPanel.css';

export default function AddEditPanel({addDesign , setAddDesign}) {

    const handleRemoveDesign = (index) => {
        const temp = addDesign.filter((item , i) => i !== index);

        setAddDesign(temp);
    }

    const handleClearAll = () => {
        const agree = confirm("Do you want to clear all!");

        if(agree) setAddDesign([]);
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

        <div className="horizontal-line-box">
            <hr className="edit-panel-line"/>
        </div>

        <div className="btn-box">
            <button className="clr-btn" onClick={handleClearAll}>Clear All</button>
            <button className="submit-btn">Save All</button>
        </div>
    </div>
}