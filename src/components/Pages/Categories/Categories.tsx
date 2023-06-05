import * as React from 'react';
import styles from '../DirectPage.module.css';
import { useParams } from 'react-router-dom';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';
import VideoCategory from './../../UI/VideoCategory/VideoCategory';
import EmptyList from '../../UI/EmptyList/EmptyList';

interface ICategoriesPageProps {
}

const CategoriesPage: React.FC<ICategoriesPageProps> = (props) => {
    const  {category} = useParams();
    const videos = useTSelector(state => state.videos.list)
                    .filter(video => video.category === category);

    // TODO:
    // Как-нибудь сократить данную хуню снизу

    let categoryLegend;
    switch (category) {
        case 'games':
            categoryLegend = 'Игры';
            break;

        case 'memes':
            categoryLegend = 'Мемы';
            break;

        case 'music':
            categoryLegend = 'Музыка'
            break;

        case 'broadcasts':
            categoryLegend = 'Прямые трансляции';
            break;

        case 'sport':
            categoryLegend = 'Спорт';
            break;

        case 'pets':
            categoryLegend = 'Питомцы';
            break;

        case 'wild':
            categoryLegend = 'Окружающий мир';
            break;

        case 'blogs':
            categoryLegend = 'Блоги';
            break;

        default:
            categoryLegend = '';
    }

    return (
        <div className={styles.body}>
            <legend>{ categoryLegend }</legend>

            {
                videos.length === 0
                
                ?

                <div className={styles.centered}>
                    <EmptyList />
                </div>

                :

                videos.map(video => <VideoMediumCase 
                    key={video.id}
                    videoID={video.id}
                    channelPrivateName={video.channelPrivateName}
                    preview={video.preview}
                    title={video.title}
                    viewsCount={video.viewsCount}
                    description={video.description}
                />)
            }
        </div>
    );
};

export default CategoriesPage;
