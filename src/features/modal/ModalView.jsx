import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleModalToggle, addData } from './modalSlice';
import { handleEditNote } from '../dashBoard/cardContainer/cardContainerSlice.js';
import './Modal.css';

function ModalView() {
    const modalEntireState = useSelector((state) => state.modal); //Boolean
    const [modalLocalState, setModalLocalState] = useState(modalEntireState);
    const dispatch = useDispatch();

    useEffect(() => {
        setModalLocalState(modalEntireState);
    }, [modalEntireState]);

    const handleTagChange = (e) => {
        const newTag = e.target.value;
        setModalLocalState(prevState => ({
            ...prevState,
            tag: newTag
        }));
    };

    if (!modalEntireState.modalShow) return null;



    return (

        <div className="modal">
            <div className="modal-dropdown">
                <label htmlFor="selectionTags">Select Tag -- </label>
                <select value={ modalLocalState.tag } name="selectionTags" id="selectionTags" onChange={ handleTagChange }>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Movies">Movies</option>
                    <option value="Random">Random</option>
                    <option value="Recipes">Recipes</option>
                    <option value="Sports">Sports</option>
                    <option value="Books">Books</option>
                    <option value="To-Do">To-Do</option>
                </select>
            </div>
            <input
                className='inputbox-title'
                type="text"
                value={ modalLocalState.title }
                onChange={ (e) => setModalLocalState(prevState => ({
                    ...prevState,
                    title: e.target.value
                })) }
            />
            <textarea
                className='inputbox-description'
                type="text"
                value={ modalLocalState.description }
                onChange={ (e) => setModalLocalState(prevState => ({
                    ...prevState,
                    description: e.target.value
                })) }
            />
            <div className="modal-buttons">
                <button className="close-button" onClick={ () => dispatch(handleModalToggle()) }>
                    Close
                </button>
                <button className="close-button" onClick={ () => {
                    dispatch(handleEditNote(modalLocalState));
                    dispatch(handleModalToggle());
                } }>
                    Save
                </button>
            </div>
        </div>
    );
}

export default ModalView;