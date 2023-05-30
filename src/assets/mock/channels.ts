import { IChannel } from './../../types/channelTypes';

import mihailoAvatar from '../images/avatars/mihailo.png';
import fuckerAvatar from '../images/avatars/fucker.png';
import assmolovAvatar from '../images/avatars/assmolov.png';
import giAvatar from '../images/avatars/gi.png';
import billyAvatar from '../images/avatars/billy.png';
import zbarabanAvatar from '../images/avatars/usec.png';
import shrekAvatar from '../images/avatars/shrek.png';

const channels: IChannel[] = [
    {
        publicName: 'Михайло Соколиное Око asddasdasdasdsadasdasdasdasdsadads',
        privateName: 'Mihailo',
        isConfirmed: true,
        avatar: mihailoAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'F.U.C.K.E.R.',
        privateName: 'FUCKER',
        isConfirmed: true,
        avatar: fuckerAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'Assmolov',
        privateName: 'Assmolov',
        isConfirmed: true,
        avatar: assmolovAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'ГЫ',
        privateName: 'GI',
        isConfirmed: false,
        avatar: giAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'Billy Harrington',
        privateName: 'BillyHarrington_2018F',
        isConfirmed: false,
        avatar: billyAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'Запрещенные Барабанщики',
        privateName: 'Z_Barabanshiki',
        isConfirmed: false,
        avatar: zbarabanAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },

    {
        publicName: 'Shrek',
        privateName: 'Shrek',
        isConfirmed: false,
        avatar: shrekAvatar,
        subscribesCount: 0,
        viewsCount: 0,
        videos: [],
    },
];

export default channels;