
import { createSlice } from '@reduxjs/toolkit';
import { IVideoState } from '../../types/videoTypes';
import videos from './../../assets/mock/videos';

const initialState: IVideoState = {
    list: videos,
    history: [],
    liked: [],  
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {

    },
});

export default videoSlice;