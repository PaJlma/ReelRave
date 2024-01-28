import { IVideo } from './../../types/videoTypes';

import mgePreview from '../images/previews/mihailo.png';
import walterPreview from '../images/previews/walterABC.jpg';
import capibaPreview from '../images/previews/capiba.jpg';
import mysticalPreview from '../images/previews/10hours.png';
import obamnaPreview from '../images/previews/soda.jpg';
import cabronPreview from '../images/previews/cabron.png';
import bagirovPreview from '../images/previews/bagirov_preview.jpg';

import mgeVideo from '../videos/mihailo.mp4';
import walterVideo from '../videos/walterABC.mp4';
import capibaVideo from '../videos/capiba.mp4';
import mysticalVideo from '../videos/wise-mystical-tree-music.mp4';
import obamnaVideo from '../videos/obamna.mp4';
import cabronVideo from '../videos/cabron.mp4';
import bagirovVideo from '../videos/bagirov_trailer.mp4';

const videos: IVideo[] = [
    {
        id: 'Lg4AM7WcWeg6',
        title: 'Славянский МГЕ прострел',
        channelPrivateName: 'AS_Bagirov',
        time: '2020 2 12 12 53 31',
        category: 'games',
        preview: mgePreview,
        video: mgeVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=NXjlw-_a61A&ab_channel=%D0%98%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9`,
        commentaries: [
            { channelPrivateName: 'STALKER', time: '2023 6 1 12 38 0', text: 'ДАВИ ЯЩЕРОВ!', likesCount: 0, dislikesCount: 0 }
        ],
    },

    {
        id: 'zOuk36HrKzp2',
        title: 'Walter White Plan A B C || Breaking Bad',
        channelPrivateName: 'STALKER',
        time: '2023 4 21 12 34 54',
        category: 'memes',
        preview: walterPreview,
        video: walterVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=S_rbxW_aDcQ&ab_channel=_%2FYkArcaneEdits%5C_`,
        commentaries: [],
    },

    {
        id: '3ReIg5xOghLA',
        title: 'Capiba',
        channelPrivateName: 'GI',
        time: '2023 5 18 19 10 54',
        category: 'memes',
        preview: capibaPreview,
        video: capibaVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=s9oQRKsROF8&ab_channel=capybaross.`,
        commentaries: [],
    },

    {
        id: 'YIp6FZtR1NZF',
        title: 'The Wise Mystical Tree Music 10 hours',
        channelPrivateName: 'Shrek',
        time: '2022 4 21 7 47 0',
        category: 'music',
        preview: mysticalPreview,
        video: mysticalVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=wv969vgqwDw&t=10085s&ab_channel=10HoursMovies`,
        commentaries: [],
    },

    {
        id: 'oeXXd1IGPRNq',
        title: 'OBAMNA? SODA!!!!',
        channelPrivateName: 'Assmolov',
        time: '2023 3 22 17 51 31',
        category: 'memes',
        preview: obamnaPreview,
        video: obamnaVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=80BwqQQY31w&ab_channel=Wheatskins`,
        commentaries: [],
    },
        
    {
        id: 'fK2JaePZDbig',
        title: 'Cabron! I need to see your boss!',
        channelPrivateName: 'STALKER',
        time: '2023 1 30 23 53 34',
        category: 'memes',
        preview: cabronPreview,
        video: cabronVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=emb6qrcrBI4&ab_channel=whis0eedits`,
        commentaries: [],
    },

    {
        id: 'sNlLWcCxNFIj',
        title: 'Трейлер канала Профессора Багирова.',
        channelPrivateName: 'AS_Bagirov',
        time: '2023 6 5 16 33 20',
        category: null,
        preview: bagirovPreview,
        video: bagirovVideo,
        viewsCount: 0,
        likesCount: 0,
        dislikesCount: 0,
        description: `https://www.youtube.com/watch?v=_RQkkU310pA&ab_channel=%D0%9F%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%91%D0%B0%D0%B3%D0%B8%D1%80%D0%BE%D0%B2`,
        commentaries: [],
    }
];

export default videos;
