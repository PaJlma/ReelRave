import * as React from 'react';
import VideoNavigation from '../VideoNavigation/VideoNavigation';
import styles from './VideoInfo.module.css';
import getNoun from './../../../../scripts/getNoun';
import showTimeAgo from './../../../../scripts/timeManager';
import VideoDescription from './VideoDescription/VideoDescription';
import VideoCommentaries from './VideoCommentaries/VideoCommentaries';
import { ICommentary } from './../../../../types/videoTypes';

interface IVideoInfoProps {
    description?: string;
    title?: string;
    viewsCount?: number;
    time?: string;
    privateName?: string;
    commentaries?: ICommentary[];
    videoID?: string;
}

const VideoInfo: React.FC<IVideoInfoProps> = ({ title, description, viewsCount, time, videoID, privateName, commentaries, ...props }) => {
  return (
    <div className={styles.body}>
        <h5 className={styles.title}>{ title }</h5>
        <VideoNavigation videoID={videoID} privateName={privateName} />
        <div className={styles.flex}>
          <p>{`${viewsCount} ${getNoun(viewsCount, 'просмотр', 'просмотра', 'просмотров')}`}</p>
          <p>{`${showTimeAgo(time)} назад`}</p>
        </div>
        <VideoDescription description={description} />
        <VideoCommentaries commentaries={commentaries} />
    </div>
  );
};

export default VideoInfo;
