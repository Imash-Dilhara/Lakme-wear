import './arrivalDesign.css';

export default function ArrivalDesign(){
    return <div id='arrival-design' className="arrival-design-main-box">
        <h1>Arrival Design</h1>
        <div className="arrival-design-content-box">
            <div className="add-arrival-design-image-box">
                <p>Add Image for Arrival</p>
                <input type="file" />
            </div>
            <button>Add Arrival</button>
        </div>
    </div>
}