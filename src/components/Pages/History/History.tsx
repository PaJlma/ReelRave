import * as React from 'react';
import styles from '../DirectPage.module.css';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';
import EmptyList from './../../UI/EmptyList/EmptyList';

interface IHistoryProps {
}

const History: React.FC<IHistoryProps> = (props) => {
  const videos = useTSelector(state => state.videos.history);
  

  return (
    <div className={styles.body}>
      <legend>Ваша история просмотра:</legend>

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

export default History;
