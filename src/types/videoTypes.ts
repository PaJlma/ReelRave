export interface IVideo {
    id: string;
    title: string;
    channelPrivateName: string;
    time: string;
    preview: string;
    video: string;
    viewsCount: number;
    likesCount: number;
    dislikesCount: number;
    commentaries: ICommentary[];
};

export interface ICommentary {
    channelPrivateName: string;
    time: string;
    text: string;
    likesCount: number;
    dislikesCount: number;
};

export interface IVideoState {
    list: IVideo[];
    history: IVideo[];
    liked: IVideo[];
    disliked: IVideo[];
};