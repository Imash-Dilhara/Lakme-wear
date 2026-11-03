import './adminPanel.css'
import Dashboard from './Dashboard';
import ArrivalDesign from './ArrivalDesign';
import AddDesignCategory from './AddDesignCategory';
import AddDesign from './AddDesign';
import About from './AboutDetails';

import { useState } from 'react';
import EditPanel from './EditPanel';

export default function AdminPanel(){

    const [activeCategory , setActiveCategory] = useState('Dashboard');
    const [menuOpen , setMenuOpen] = useState(false);
    const [selectedDesign , setSelectedDesign] = useState(null);

    const categoryItems = [
        {id: 1 , name: 'Dashboard' , link: '#dashboard'},
        {id: 2 , name: 'New Arrival Design' , link: '#arrival-design'},
        {id: 3 , name: 'Add Design Category' , link: '#design-category'},
        {id: 4 , name: 'Add Design' , link: '#addNew-design'},
        {id: 5 , name: 'About Details' , link: '#about-details'},
    ];

    return <div className="admin-panel-main-box">
        <div className="admin-category-panel-box">
            <div className="admin-panel-header">
                <h1>LAKME</h1>
                <div
                    className={menuOpen ? 'hamburger open' : 'hamburger'}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <hr />

            <div className={menuOpen ? 'category-link-box show' : 'category-link-box'}>
                {categoryItems.map((item) => (
                    <a
                        key={item.id}
                        onClick={() => {
                            setActiveCategory(item.name);
                            setMenuOpen(false);
                        }}
                        className={activeCategory === item.name ? 'active' : ''}
                        href={item.link}
                    >{item.name}</a>
                ))}
            </div>

        </div>
        <div className="admin-category-content-box">
                <Dashboard onDesignSelect={setSelectedDesign} selectedDesign={selectedDesign}/>
                <ArrivalDesign />
                <AddDesignCategory />
                <AddDesign />
                <About />
        </div>

        <div className="wall-line-box">
            <hr className='wall-line'/>
        </div>

        <div className="selected-content-box">
            <h3>Edit slid</h3>
            {!selectedDesign ? (
                <div className="selected-design">
                    <p>No products yet. Select designs or Upload an designs and add your first piece</p>
                </div>
            ):(
                <EditPanel setSelectedDesign={setSelectedDesign} selectedDesign={selectedDesign}/>)}
        </div>
    </div>
}