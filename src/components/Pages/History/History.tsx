import * as React from 'react';
import styles from './History.module.css';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';

interface IHistoryProps {
}

const History: React.FC<IHistoryProps> = (props) => {
  const videos = useTSelector(state => state.videos.history);
  

  return (
    <div className={styles.body}>
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

export default History;
