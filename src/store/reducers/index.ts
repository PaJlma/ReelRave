import { combineReducers } from "@reduxjs/toolkit";
import channelSlice from './channelSlice';
import videoSlice from './videoSlice';


const rootReducer = combineReducers({
    channels: channelSlice.reducer,
    videos: videoSlice.reducer,
});

export default rootReducer;