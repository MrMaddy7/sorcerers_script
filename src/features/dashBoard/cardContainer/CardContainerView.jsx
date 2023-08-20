import React from 'react';
import { useEffect, useState } from 'react';
import './CardContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import CardView from './card/CardView';

//Place Card Component Here
function CardContinerView() {
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
    const searchText = useSelector((state) => state.navbar.searchText);
    const cardArray = useSelector((state) => state.cardContainer.cardArray);
    const searchArray = useSelector((state) => state.cardContainer.searchArray);
    const tagArray = useSelector((state) => state.cardContainer.tagArray);
    const [displayArray, setDisplayArray] = useState([...cardArray]);
    const maxminWidth = `${sidebarShow ? 'CardContainer-Box-min' : 'CardContainer-Box-max'}`;

    useEffect(() => {
        if (searchText.length == 0) {
            setDisplayArray([...cardArray]);
        }
        if (searchText.length > 0) {
            setDisplayArray([]);
            const filteredCards = cardArray.filter(card => {
                const lowercaseSearchText = searchText.toLowerCase();
                const lowercaseTitle = card.title.toLowerCase();
                const lowercaseDescription = card.description.toLowerCase();
                return lowercaseTitle.includes(lowercaseSearchText) || lowercaseDescription.includes(lowercaseSearchText);
            });
            if (filteredCards.length > 0 && searchText.length != 0) {
                setDisplayArray(filteredCards);
            }
        }
    }, [searchText]);

    // useEffect(() => {
    //     console.log("This use Effect RAN");
    //     if (searchText.length == 0) {
    //         setDisplayArray([...cardArray]);
    //     }
    // },);


    return (
        <div className={ maxminWidth }>
            { displayArray.map((ele) => {
                return (
                    <CardView key={ ele.key } title={ ele.title } description={ ele.description } />
                );
            }) }
        </div>
    );
}

export default CardContinerView;