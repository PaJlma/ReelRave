import * as React from 'react';
import styles from './Home.module.scss';
import { useTSelector } from './../../../hooks/redux';
import VideoCase from '../../UI/VideoCase/VideoCase';

interface IHomeProps {
}

const Home: React.FC<IHomeProps> = (props) => {
  const videos = useTSelector(state => state.videos.list);

  return (
    <div className={styles.body}>
        <div className={styles.content}>
          {
            videos.map(video => <VideoCase
              key={video.id} 
              id={video.id}
              preview={video.preview}
              title={video.title}
              time={video.time}
              viewsCount={video.viewsCount}
              channelPrivateName={video.channelPrivateName}
            />
            )
          }
        </div>
    </div>
  );
};

export default Home;
