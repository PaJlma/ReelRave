import * as React from 'react';
import Player from '../../UI/Player/Player';
import styles from './Video.module.css';

import video from '../../../assets/videos/mihailo.mp4';

interface IVideoProps {
}

const Video: React.FC<IVideoProps> = (props) => {
  return (
    <div className={styles.body}>
      <Player video={video} autoPlay={true} />
    </div>
  );
};

export default Video;