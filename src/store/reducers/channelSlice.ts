import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChannel, IChannelState } from "../../types/channelTypes";
import channels from './../../assets/mock/channels';


const initialState:IChannelState = {
    list: channels,
    subscribed: [],
};

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        subscribe(state, action: PayloadAction<IChannel>) {
            state.subscribed.includes(action.payload) 
            ? 
            state.subscribed.filter(channel => channel.privateName !== action.payload.privateName) 
            : 
            state.subscribed.push(action.payload);
        }
    }
});

export default channelSlice;