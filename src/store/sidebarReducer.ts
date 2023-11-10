import {createSlice} from "@reduxjs/toolkit";

const sidebarReducer = createSlice({
    name: "sidebarReducer",
    initialState: {
        openMenu: true
    },
    reducers: {
        editShowMenu(state, action) {
            state.openMenu = action.payload;
        }
    }
});

export default sidebarReducer.reducer;
export const {editShowMenu} = sidebarReducer.actions;
