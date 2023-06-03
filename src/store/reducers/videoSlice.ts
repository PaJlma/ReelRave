
import { createSlice } from '@reduxjs/toolkit';
import { IVideoState } from '../../types/videoTypes';
import videos from './../../assets/mock/videos';
import { PayloadAction } from '@reduxjs/toolkit';
import { IVideo, ICommentary } from './../../types/videoTypes';

const initialState: IVideoState = {
    list: videos,
    history: [],
    liked: [],
    disliked: [],  
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        like(state, action: PayloadAction<IVideo>) {
            const videoExact = state.liked.some(video => video.id === action.payload.id);
            const videoInDislikedExact = state.disliked.some(video => video.id === action.payload.id);
            const videoObject = state.list.find(video => video.id === action.payload.id);

            if (videoObject) {
                if (videoExact) {
                    state.liked = state.liked.filter(video => video.id !== action.payload.id);
                    videoObject.likesCount--;
                } else {
                    state.liked.push(action.payload);
                    videoObject.likesCount++; 
                    if (videoInDislikedExact) {
                        state.disliked = state.disliked.filter(video => video.id !== videoObject.id);
                        videoObject.dislikesCount--;
                    }
                }
            }
        },

        dislike(state, action: PayloadAction<IVideo>) {
            const videoExact = state.disliked.some(video => video.id === action.payload.id);
            const videoInLikedExact = state.liked.some(video => video.id === action.payload.id);
            const videoObject = state.list.find(video => video.id === action.payload.id);

            if (videoObject) {
                if (videoExact) {
                    state.disliked = state.disliked.filter(video => video.id !== action.payload.id);
                    videoObject.dislikesCount--;
                } else {
                    state.disliked.push(action.payload);
                    videoObject.dislikesCount++;
                    if (videoInLikedExact) {
                        state.liked = state.liked.filter(video => video.id !== videoObject.id);
                        videoObject.likesCount--;
                    }
                }
            }
        },

        madeCommentary(state, action: PayloadAction<[ commentary: ICommentary, videoID: string | undefined ]>) {
            const [commentary, videoID] = action.payload;
            if (videoID) {
                const video = state.list.find(video => video.id === videoID);
                video?.commentaries.push(commentary);
            }
        },
    },
});

export default videoSlice;