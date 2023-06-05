import * as React from 'react';
import styles from '../DirectPage.module.css';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';
import EmptyList from './../../UI/EmptyList/EmptyList';

interface ILikedProps {
}

const Liked: React.FC<ILikedProps> = (props) => {
  const videos = useTSelector(state => state.videos.liked);
  
  return (
    <div className={styles.body}>
      <legend>Вам понравилось:</legend>

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
        />).reverse()
      }
    </div>
  );
};

export default Liked;
