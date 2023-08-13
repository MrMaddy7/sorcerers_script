import React from 'react';
import './CardContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import CardView from './card/CardView';

//Place Card Component Here
function CardContinerView() {

    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow); //Boolean
    const maxminWidth = `${sidebarShow ? 'CardContainer-Box-min' : 'CardContainer-Box-max'}`;

    const cardArray = [
        {
            "key": 0,
            "title": "title Of The Note",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        },
        {
            "key": 1,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 2,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 3,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 4,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 5,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        },
        {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        }, {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        },
        {
            "key": 6,
            "title": "Tom Riddle",
            "description": "This diary belongs to tom riddle",
            isPinned: true,
            "tag": "Personal",
            "date": "2017-01-01"

        },
    ];



    return (
        <div className={ maxminWidth }>
            { cardArray.map((ele) => {
                return (
                    <CardView title={ ele.title } description={ ele.description } />
                );
            }) }
        </div>
    );
}

export default CardContinerView;