import * as React from 'react';
import VideoNavigation from '../VideoNavigation/VideoNavigation';
import styles from './VideoInfo.module.css';

interface IVideoInfoProps {
    title?: string;
    privateName?: string;
    videoID?: string;
}

const VideoInfo: React.FC<IVideoInfoProps> = ({ title, videoID, privateName, ...props }) => {
  return (
    <div className={styles.body}>
        <h5 className={styles.title}>{ title }</h5>
        <VideoNavigation videoID={videoID} privateName={privateName} />
    </div>
  );
};

export default VideoInfo;
