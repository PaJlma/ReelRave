
import { createSlice } from '@reduxjs/toolkit';
import { IOptionsState } from './../../types/optionsTypes';

const initialState: IOptionsState = {
    isDefaultSidebarActive: true,
    isSlidingSidebarActive: false,
};

const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        toggleDefaultSidebar(state) {
            state.isDefaultSidebarActive = !state.isDefaultSidebarActive;
        },

        toggleSlidingSidebar(state) {
            state.isSlidingSidebarActive = !state.isSlidingSidebarActive;
        }
    }
});

export default optionsSlice;