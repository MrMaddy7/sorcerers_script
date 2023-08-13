import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        sidebarShow: true,
    },
    reducers: {
        handleSideBarToggle: (state) => {
            // state.numOfCakes--;
            state.sidebarShow = !state.sidebarShow;
            console.log("SideBarShow?", state.sidebarShow);
        },
    }
});

export default sidebarSlice.reducer;
export const { handleSideBarToggle } = sidebarSlice.actions;
