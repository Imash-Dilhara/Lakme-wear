import './adminPanel.css'

import { useState } from 'react';

export default function AdminPanel(){

    const [activeCategory , setActiveCategory] = useState('Dashboard');

    const categoryItems = [
        {id: 1 , name: 'Dashboard' , link: ''},
        {id: 2 , name: 'Add Design' , link: ''},
    ];

    return <div className="admin-panel-main-box">
        <div className="admin-category-panel-box">
            <h1>LAKME</h1>
            <hr />

            <div className="category-link-box">
                {categoryItems.map((item) => (
                    <p
                        key={item.id}
                        onClick={() => {setActiveCategory(item.name)}}
                        className={activeCategory === item.name ? 'active' : ''}
                    >{item.name}</p>
                ))}
            </div>
            
        </div>
        <div className="admin-category-content-box"></div>
    </div>
}