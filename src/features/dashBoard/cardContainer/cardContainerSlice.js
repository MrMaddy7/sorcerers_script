import { createSlice } from "@reduxjs/toolkit";

const cardContainerSlice = createSlice({
    name: "cardContainer",
    initialState: {
        cardArray: [
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
                "key": 7,
                "title": "Tom Riddle",
                "description": "This diary belongs to tom riddle",
                isPinned: true,
                "tag": "Personal",
                "date": "2017-01-01"

            }, {
                "key": 8,
                "title": "Tom Riddle",
                "description": "This diary belongs to tom riddle",
                isPinned: true,
                "tag": "Personal",
                "date": "2017-01-01"

            }, {
                "key": 9,
                "title": "Tom Riddle",
                "description": "This diary belongs to tom riddle",
                isPinned: true,
                "tag": "Personal",
                "date": "2017-01-01"

            }, {
                "key": 10,
                "title": "Tom Riddle",
                "description": "This diary belongs to tom riddle",
                isPinned: true,
                "tag": "Personal",
                "date": "2017-01-01"

            },
            {
                "key": 11,
                "title": "Tom Riddle",
                "description": "This diary belongs to tom riddle",
                isPinned: true,
                "tag": "Personal",
                "date": "2017-01-01"

            },
        ],
        searchArray: [],
        tagArray: [],
    },
    reducers: {
        handleSearchArray: (state, action) => {
            // state.searchText = action.payload;
        },
        handleOnBlur: (state) => {

        }
    }
});

export default cardContainerSlice.reducer;
export const { handleSearchArray, handleOnBlur } = cardContainerSlice.actions;
