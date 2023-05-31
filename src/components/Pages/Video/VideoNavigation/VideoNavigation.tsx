import * as React from 'react';
import ChannelPromotion from '../../../UI/ChannelPromotion/ChannelPromotion';
import VideoReputation from '../../../UI/VideoReputation/VideoReputation';
import styles from './VideoNavigation.module.css';

interface IVideoNavigationProps {
  privateName?: string;
  videoID?: string;
}

const VideoNavigation: React.FC<IVideoNavigationProps> = ({ privateName, videoID, ...props }) => {
  return (
    <div className={styles.body}>
      <ChannelPromotion privateName={privateName} />
      <VideoReputation videoID={videoID} />
    </div>
  );
};

export default VideoNavigation;
