import * as React from 'react';
import Player from '../../UI/Player/Player';
import styles from './Video.module.css';

import { useTSelector } from '../../../hooks/redux';
import { useParams } from 'react-router-dom';

interface IVideoProps {
}

const Video: React.FC<IVideoProps> = (props) => {
  const { id } = useParams();
  const video = useTSelector(state => state.videos.list).find(video => video.id === id);

  return (
    <div className={styles.body}>
      <Player video={video?.video} autoPlay={true} />
    </div>
  );
};

export default Video;