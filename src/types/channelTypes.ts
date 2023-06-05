import { IVideo } from './videoTypes';

export interface IChannel {
    publicName: string;
    privateName: string;
    isConfirmed: boolean;
    avatar: string;
    header: string | null;
    subscribesCount: number;
    viewsCount: number;
    videos: string[];
};

export interface IChannelState {
    list: IChannel[];
    subscribed: IChannel[];
};