import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        sidebarShow: true,
        selectedTag: "",
    },
    reducers: {
        handleSideBarToggle: (state) => {
            // state.numOfCakes--;
            state.sidebarShow = !state.sidebarShow;
        },
        handleSelectedTag: (state, action) => {
            state.selectedTag = action.payload;
        }
    }

});

export default sidebarSlice.reducer;
export const { handleSideBarToggle, handleSelectedTag } = sidebarSlice.actions;
