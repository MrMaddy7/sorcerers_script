import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleModalToggle, addData } from './modalSlice';
import './Modal.css';

function ModalView() {
    const modalEntireState = useSelector((state) => state.modal); //Boolean
    const dispatch = useDispatch();

    if (!modalEntireState.modalShow) return null;
    return (

        <div className="modal">
            <h1>{ modalEntireState.title }</h1>
            <p>{ modalEntireState.description }</p>
            <div className="modal-buttons">
                <button className="close-button" onClick={ () => dispatch(handleModalToggle()) }>
                    Close
                </button>
                <button className="close-button" onClick={ () => dispatch(handleModalToggle()) }>
                    Save
                </button>
            </div>
        </div>
    );
}

export default ModalView;