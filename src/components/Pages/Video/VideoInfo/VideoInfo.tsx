import * as React from 'react';
import VideoNavigation from '../VideoNavigation/VideoNavigation';
import styles from './VideoInfo.module.css';
import getNoun from './../../../../scripts/getNoun';
import showTimeAgo from './../../../../scripts/timeManager';
import VideoDescription from './VideoDescription/VideoDescription';

interface IVideoInfoProps {
    description?: string;
    title?: string;
    viewsCount?: number;
    time?: string;
    privateName?: string;
    videoID?: string;
}

const VideoInfo: React.FC<IVideoInfoProps> = ({ title, description, viewsCount, time, videoID, privateName, ...props }) => {
  return (
    <div className={styles.body}>
        <h5 className={styles.title}>{ title }</h5>
        <VideoNavigation videoID={videoID} privateName={privateName} />
        <div className={styles.flex}>
          <p>{`${viewsCount} ${getNoun(viewsCount, 'просмотр', 'просмотра', 'просмотров')}`}</p>
          <p>{`${showTimeAgo(time)} назад`}</p>
        </div>
        <VideoDescription description={description} />
    </div>
  );
};

export default VideoInfo;
