import * as React from 'react';
import styles from './Liked.module.css';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';

interface ILikedProps {
}

const Liked: React.FC<ILikedProps> = (props) => {
  const videos = useTSelector(state => state.videos.liked);
  
  return (
    <div className={styles.body}>
      <legend>Вам понравилось:</legend>

      {
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
