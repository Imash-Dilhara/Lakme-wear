import './adminPanel.css'

import { useState } from 'react';

export default function AdminPanel(){

    const [activeCategory , setActiveCategory] = useState('Dashboard');
    const [menuOpen , setMenuOpen] = useState(false);

    const categoryItems = [
        {id: 1 , name: 'Dashboard' , link: ''},
        {id: 2 , name: 'Change Design Details' , link: ''},
        {id: 3 , name: 'New Arrival Design' , link: ''},
        {id: 4 , name: 'Add Design' , link: ''},
        {id: 5 , name: 'About Details' , link: ''},
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
                    <p
                        key={item.id}
                        onClick={() => {
                            setActiveCategory(item.name);
                            setMenuOpen(false);
                        }}
                        className={activeCategory === item.name ? 'active' : ''}
                    >{item.name}</p>
                ))}
            </div>

        </div>
        <div className="admin-category-content-box"></div>
    </div>
}