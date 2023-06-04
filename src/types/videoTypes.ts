export interface IVideo {
    id: string;
    title: string;
    channelPrivateName: string;
    time: string;
    category: TVideoCategory,
    preview: string;
    video: string;
    viewsCount: number;
    likesCount: number;
    dislikesCount: number;
    description: string;
    commentaries: ICommentary[];
};

export type TVideoCategory = null | 'sport' | 'pets' | 'wild' | 'blogs' | 'broadcasts' | 'music' | 'memes' | 'games';
export interface ICommentary {
    channelPrivateName?: string;
    time?: string;
    text?: string;
    likesCount?: number;
    dislikesCount?: number;
};

export interface IVideoState {
    list: IVideo[];
    history: IVideo[];
    liked: IVideo[];
    disliked: IVideo[];
};

export enum categories {
    'games' = 'Игры',
    'music' = 'Музыка',
    'memes' = 'Мемы',
    'broadcasts' = 'Прямые трансляции',
    'sport' = 'Спорт',
    'pets' = 'Питомцы',
    'wild' = 'Окружающий мир',
    'blogs' = 'Блоги',
}