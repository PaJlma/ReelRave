import { combineReducers } from "@reduxjs/toolkit";
import channelSlice from './channelSlice';
import videoSlice from './videoSlice';
import optionsSlice from './optionsSlice';


const rootReducer = combineReducers({
    channels: channelSlice.reducer,
    videos: videoSlice.reducer,
    options: optionsSlice.reducer,
});

export default rootReducer;