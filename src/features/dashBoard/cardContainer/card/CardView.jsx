import React from 'react';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleModalToggle, addData } from '../../../modal/modalSlice';


function CardView({ id, title, description, tag }) {
    // const modalShow = useSelector((state) => state.modal.modalShow); //Boolean

    const dispatch = useDispatch();

    const handleSingleCardClick = () => {
        dispatch(handleModalToggle());
        dispatch(addData({ id, title, description, tag }));
    };
    return (
        <div className="SingleCard" onClick={ handleSingleCardClick }>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    );
}

export default CardView;