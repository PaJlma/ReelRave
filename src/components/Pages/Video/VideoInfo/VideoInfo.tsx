import * as React from 'react';
import VideoNavigation from '../VideoNavigation/VideoNavigation';
import styles from './VideoInfo.module.css';

interface IVideoInfoProps {
    title?: string;
    privateName?: string;
}

const VideoInfo: React.FC<IVideoInfoProps> = ({ title, privateName, ...props }) => {
  return (
    <div className={styles.body}>
        <h5 className={styles.title}>{ title }</h5>
        <VideoNavigation privateName={privateName} />
    </div>
  );
};

export default VideoInfo;
