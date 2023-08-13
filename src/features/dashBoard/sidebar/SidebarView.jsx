import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSideBarToggle } from './sidebarSlice.js';
import "./Sidebar.css";
import BroomPng from '../../../assets/broom.png';

function SidebarView() {

    let listTags = [
        {
            "key": "1",
            "tagName": "Pinned"
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
        {
            "key": "6",
            "tagName": "Personal"
        },
        {
            "key": "7",
            "tagName": "Office"
        },
        {
            "key": "8",
            "tagName": "Movies"
        },
        {
            "key": "9",
            "tagName": "To-Do"
        },
    ];
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow); //Boolean
    const sidebarClass = `${sidebarShow ? 'Sidebar-panel-show' : 'Sidebar-panel-hide'}`;
    return (
        <div className={ sidebarClass }>
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
