import { IVideo } from './videoTypes';

export interface IChannel {
    publicName: string;
    privateName: string;
    isConfirmed: boolean;
    avatar: string;
    subscribesCount: number;
    viewsCount: number;
    videos: IVideo[];
};

export interface IChannelState {
    list: IChannel[];
    subscribed: IChannel[];
};