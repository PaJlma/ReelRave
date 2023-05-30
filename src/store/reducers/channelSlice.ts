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
            const channelExact = state.subscribed.some(channel => channel.privateName === action.payload.privateName);
            const channelObject = state.list.find(channel => channel.privateName === action.payload.privateName);

            if (channelObject) {
                if (channelExact) {
                    state.subscribed = state.subscribed.filter(channel => channel.privateName !== action.payload.privateName);
                    channelObject.subscribesCount--;
                } else {
                    state.subscribed.push(action.payload);
                    channelObject.subscribesCount++;
                }
            }
        }
    }
});

export default channelSlice;  