import React, { useEffect } from 'react';
import "./Sidebar.css";
import BroomPng from '../../assets/broom.png';

function SidebarView() {

    let listTags = [
        {
            "key": "1",
            "tagName": "Inspirational"
        },
        {
            "key": "2",
            "tagName": "Personal"
        },
        {
            "key": "3",
            "tagName": "Office"
        },
        {
            "key": "4",
            "tagName": "Movies"
        },
        {
            "key": "5",
            "tagName": "To-Do"
        },
    ];

    return (
        <div className='Sidebar-panel'>
            <ul className="Sidebar-ul">
                { listTags.map((ele) => {
                    return (
                        <li className="Sidebar-items" key={ ele.key }>
                            { <img className="items-bullet" src={ BroomPng } /> }
                            <p className='items-text'>{ ele.tagName }</p></li>
                    );
                }) }
            </ul>

        </div>
    );
}

export default SidebarView;