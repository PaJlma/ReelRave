import { IChannel } from './../../types/channelTypes';

import bagirovAvatar from '../images/avatars/bagirov.png';
import fuckerAvatar from '../images/avatars/fucker.png';
import assmolovAvatar from '../images/avatars/assmolov.png';
import giAvatar from '../images/avatars/gi.png';
import billyAvatar from '../images/avatars/billy.png';
import zbarabanAvatar from '../images/avatars/usec.png';
import shrekAvatar from '../images/avatars/shrek.png';

import bagirovHeader from '../headers/bagirov.png';

const channels: IChannel[] = [
    {
        publicName: 'Александр Сергеевич Багиров',
        privateName: 'AS_Bagirov',
        isConfirmed: true,
        avatar: bagirovAvatar,
        header: bagirovHeader,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['Lg4AM7WcWeg6', 'sNlLWcCxNFIj'],
    },

    {
        publicName: 'S.T.A.L.K.E.R.',
        privateName: 'STALKER',
        isConfirmed: true,
        avatar: fuckerAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['zOuk36HrKzp2', 'fK2JaePZDbig'],
    },

    {
        publicName: 'Assmolov',
        privateName: 'Assmolov',
        isConfirmed: true,
        avatar: assmolovAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['oeXXd1IGPRNq'],
    },

    {
        publicName: 'ГЫ',
        privateName: 'GI',
        isConfirmed: false,
        avatar: giAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['3ReIg5xOghLA'],
    },

    {
        publicName: 'Billy Harrington',
        privateName: 'BillyHarrington_2018F',
        isConfirmed: false,
        avatar: billyAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['NdsYOvLNLQGc'],
    },

    {
        publicName: 'Запрещенные Барабанщики',
        privateName: 'Z_Barabanshiki',
        isConfirmed: false,
        avatar: zbarabanAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['2e7jp5nPVEvJ'],
    },

    {
        publicName: 'Shrek',
        privateName: 'Shrek',
        isConfirmed: false,
        avatar: shrekAvatar,
        header: null,
        subscribesCount: 0,
        viewsCount: 0,
        videos: ['YIp6FZtR1NZF'],
    },
];

export default channels;
