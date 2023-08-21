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
                date: '2017-12-13'
            },
            {
                key: 1,
                title: 'Meeting Notes',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Work',
                date: '2021-01-05'
            },
            {
                key: 2,
                title: 'Fitness Plan',
                description: 'Lorem ipsum dolor sit amet.',
                isPinned: false,
                tag: 'Random',
                date: '2010-06-21'
            },
            {
                key: 3,
                title: 'Meeting Notes',
                description: 'Praesent mattis semper justo.',
                isPinned: false,
                tag: 'Personal',
                date: '2018-09-21'
            },
            {
                key: 4,
                title: 'Grocery List',
                description: 'Nullam quis ante ac arcu congue.',
                isPinned: true,
                tag: 'Sports',
                date: '2013-01-16'
            },
            {
                key: 5,
                title: 'Fitness Plan',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Movies',
                date: '2015-07-18'
            },
            {
                key: 6,
                title: 'Grocery List',
                description: 'Praesent mattis semper justo.',
                isPinned: true,
                tag: 'Sports',
                date: '2014-01-04'
            },
            {
                key: 7,
                title: 'Delicious Recipe',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Random',
                date: '2016-12-28'
            },
            {
                key: 8,
                title: 'Book Recommendation',
                description: 'Consectetur adipiscing elit.',
                isPinned: false,
                tag: 'Sports',
                date: '2016-02-05'
            },
            {
                key: 9,
                title: 'Movie Review',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Recipes',
                date: '2013-01-01'
            },
            {
                key: 10,
                title: 'Delicious Recipe',
                description: 'Nullam quis ante ac arcu congue.',
                isPinned: true,
                tag: 'To-Do',
                date: '2017-02-11'
            },
            {
                key: 11,
                title: 'Delicious Recipe',
                description: 'Cras eget augue sed erat ullamcorper.',
                isPinned: true,
                tag: 'Recipes',
                date: '2017-09-15'
            },
            {
                key: 12,
                title: 'Grocery List',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Work',
                date: '2017-04-03'
            },
            {
                key: 13,
                title: 'Movie Review',
                description: 'Vivamus ullamcorper, arcu ut accumsan.',
                isPinned: false,
                tag: 'Personal',
                date: '2011-09-22'
            },
            {
                key: 14,
                title: 'Movie Review',
                description: 'Fusce at est in quam bibendum.',
                isPinned: false,
                tag: 'Work',
                date: '2012-09-29'
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

        }
    }
});

export default cardContainerSlice.reducer;
export const { handleSearchArray, handleOnBlur } = cardContainerSlice.actions;
