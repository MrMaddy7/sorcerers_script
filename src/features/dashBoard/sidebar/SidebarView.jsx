import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSideBarToggle, handleSelectedTag } from './sidebarSlice.js';
import "./Sidebar.css";
import BroomPng from '../../../assets/broom.png';

function SidebarView() {
    const currentSelectedTag = useSelector((state) => state.sidebar.selectedTag); //Boolean
    const dispatch = useDispatch();


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
            "tagName": "Tv-Shows"
        },
        {
            "key": "6",
            "tagName": "Recipes"
        },
        {
            "key": "7",
            "tagName": "Sports"
        },
        {
            "key": "8",
            "tagName": "Books"
        },
        {
            "key": "9",
            "tagName": "To-Do"
        },
    ];

    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow); //Boolean
    const sidebarClass = `${sidebarShow ? 'Sidebar-panel-show' : 'Sidebar-panel-hide'}`;

    const renderListItem = (ele) => {
        //? THIS FUNCTION RUNS TO RENDER LIST IF THEY ARE NOT SELECTED
        //? DOES NOT ADD UNDERLINE TO LI ELEMENT    
        return (
            <li className="Sidebar-items" key={ ele.key }>
                { <img className="items-bullet" src={ BroomPng } /> }
                <p onClick={ () => dispatch(handleSelectedTag(ele.tagName)) } className='items-text'>{ ele.tagName }</p></li>);
    };
    const renderSelectedListItem = (ele) => {
        //? THIS FUNCTION RUNS TO RENDER LIST IF THEY ARE SELECTED
        //? DOES  ADD UNDERLINE TO LI ELEMENT    
        return (
            <li className="Sidebar-items" key={ ele.key }>
                { <img className="items-bullet" src={ BroomPng } /> }
                <u><p onClick={ () => dispatch(handleSelectedTag(ele.tagName)) } className='items-text'>{ ele.tagName }</p></u></li>);
    };

    return (
        <div className={ sidebarClass }>
            <ul className="Sidebar-ul">
                { listTags.map((ele) => {
                    return currentSelectedTag === ele.tagName ? renderSelectedListItem(ele) : renderListItem(ele);
                }) }
            </ul>
        </div>
    );
}

export default SidebarView;
