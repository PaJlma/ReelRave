import * as React from 'react';
import Player from '../../UI/Player/Player';
import styles from './Video.module.css';

import { useTSelector } from '../../../hooks/redux';
import { useParams } from 'react-router-dom';
import VideoInfo from './VideoInfo/VideoInfo';

interface IVideoProps {
}

const Video: React.FC<IVideoProps> = (props) => {
  const { id } = useParams();
  const video = useTSelector(state => state.videos.list).find(video => video.id === id);

  return (
    <div className={styles.body}>
      <Player video={video?.video} autoPlay={false} />
      <VideoInfo title={video?.title} privateName={video?.channelPrivateName} />
    </div>
  );
};

export default Video;