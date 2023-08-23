import { createSlice } from "@reduxjs/toolkit";

const cardContainerSlice = createSlice({
    name: "cardContainer",
    initialState: {
        cardArray: [
            {
                key: 0,
                title: 'Meeting Notes',
                description: 'Lorem ipsum dolor sit amet.',
                isPinned: false,
                tag: 'Movies',

            },
            {
                key: 1,
                title: 'Meeting Notes',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Work',

            },
            {
                key: 2,
                title: 'Fitness Plan',
                description: 'Lorem ipsum dolor sit amet.',
                isPinned: false,
                tag: 'Random',

            },
            {
                key: 3,
                title: 'Meeting Notes',
                description: 'Praesent mattis semper justo.',
                isPinned: false,
                tag: 'Personal',

            },
            {
                key: 4,
                title: 'Grocery List',
                description: 'Nullam quis ante ac arcu congue.',
                isPinned: true,
                tag: 'Sports',

            },
            {
                key: 5,
                title: 'Fitness Plan',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Movies',

            },
            {
                key: 6,
                title: 'Grocery List',
                description: 'Praesent mattis semper justo.',
                isPinned: true,
                tag: 'Sports',

            },
            {
                key: 7,
                title: 'Delicious Recipe',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Random',

            },
            {
                key: 8,
                title: 'Book Recommendation',
                description: 'Consectetur adipiscing elit.',
                isPinned: false,
                tag: 'Sports',

            },
            {
                key: 9,
                title: 'Movie Review',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Recipes',

            },
            {
                key: 10,
                title: 'Delicious Recipe',
                description: 'Nullam quis ante ac arcu congue.',
                isPinned: true,
                tag: 'To-Do',

            },
            {
                key: 11,
                title: 'Delicious Recipe',
                description: 'Cras eget augue sed erat ullamcorper.',
                isPinned: true,
                tag: 'Recipes',

            },
            {
                key: 12,
                title: 'Grocery List',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Work',

            },
            {
                key: 13,
                title: 'Movie Review',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Personal',

            },
            {
                key: 14,
                title: 'Movie Review',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Work',

            }
        ],
        searchArray: [],
        tagArray: [],
    },
    reducers: {
        handleSearchArray: (state, action) => {
            // state.searchText = action.payload;
        },
        handleOnBlur: (state) => {

        },
        handleSaveNewNote: (state, action) => {
            const newKey = state.cardArray.length;
            const tempObject = {
                key: newKey,
                title: action.payload.title,
                description: action.payload.description,
                isPinned: false,
                tag: action.payload.tag || "Personal",
            };
            console.log(tempObject, "NEw Object in the card array");
            state.cardArray.push(tempObject);

        },
        handleEditNote: (state, action) => {
            //console.log(action.payload, "This is in edit state");
            const indexToUpdate = state.cardArray.findIndex(card => card.key === action.payload.key);
            if (indexToUpdate !== -1) {
                state.cardArray[indexToUpdate] = {
                    ...action.payload
                };
            }
        },
        handleDeleteNote: (state, action) => {
            //Find the kye pop the object
            const indexToDelete = state.cardArray.findIndex(item => item.key === action.payload.key);
            if (indexToDelete !== -1) {
                state.cardArray.splice(indexToDelete, 1);
            }
        }
    }
});

export default cardContainerSlice.reducer;
export const { handleSearchArray, handleOnBlur, handleEditNote, handleSaveNewNote, handleDeleteNote } = cardContainerSlice.actions;
