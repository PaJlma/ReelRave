import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VideoCategory.module.css';

import sportSVG from '../../../assets/images/UI/sport.svg';
import gamesSVG from '../../../assets/images/UI/games.svg';
import petsSVG from '../../../assets/images/UI/pets.svg';
import wildSVG from '../../../assets/images/UI/wild.svg';
import blogsSVG from '../../../assets/images/UI/blogs.svg';
import broadcastsSVG from '../../../assets/images/UI/broadcasts.svg';
import musicSVG from '../../../assets/images/UI/music.svg';
import memesSVG from '../../../assets/images/UI/smile-dizzy.svg';

interface IVideoCategoryProps {
    category?: string | undefined | null;
}

const VideoCategory: React.FunctionComponent<IVideoCategoryProps> = ({ category, ...props }) => {
    let categoryToShow: React.ReactElement[] | null;
    switch (category) {
        case 'games':
            categoryToShow = [ <img src={gamesSVG} alt='games' />, <p>Игры</p> ];
            break;

        case 'memes':
            categoryToShow = [ <img src={memesSVG} alt='memes' />, <p>Мемы</p> ];
            break;

        case 'music':
            categoryToShow = [ <img src={musicSVG} alt='music' />, <p>Музыка</p> ];
            break;

        case 'broadcasts':
            categoryToShow = [ <img src={broadcastsSVG} alt='broadcasts' />, <p>Прямые трансляции</p> ];
            break;

        case 'sport':
            categoryToShow = [ <img src={sportSVG} alt='sport' />, <p>Спорт</p> ];
            break;

        case 'pets':
            categoryToShow = [ <img src={petsSVG} alt='pets' />, <p>Питомцы</p> ];
            break;

        case 'wild':
            categoryToShow = [ <img src={wildSVG} alt='wild' />, <p>Окружающий мир</p> ];
            break;

        case 'blogs':
            categoryToShow = [ <img src={blogsSVG} alt='blogs' />, <p>Блоги</p> ];
            break;

        default:
            categoryToShow = null;
    }

    return (
        <NavLink to={`/categories/${category}`} className={styles.body}>
            {
                categoryToShow 
                &&
                categoryToShow.map(element => element)
            }
        </NavLink>
    );
};

export default VideoCategory;
