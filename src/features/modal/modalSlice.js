import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalShow: false,
        key: "",
        title: "",
        description: "",
        isPinned: false,
        tag: "",
        date: ""

    },
    reducers: {
        handleModalToggle: (state) => {
            state.modalShow = !state.modalShow;
        },
        addData: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
        }
    }
});

export default modalSlice.reducer;
export const { handleModalToggle, addData } = modalSlice.actions;
