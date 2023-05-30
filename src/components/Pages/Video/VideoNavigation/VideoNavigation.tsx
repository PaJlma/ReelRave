import * as React from 'react';
import ChannelPromotion from '../../../UI/ChannelPromotion/ChannelPromotion';
import styles from './VideoNavigation.module.css';

interface IVideoNavigationProps {
  privateName?: string;
}

const VideoNavigation: React.FC<IVideoNavigationProps> = ({ privateName, ...props }) => {
  return (
    <div className={styles.body}>
      <ChannelPromotion privateName={privateName} />
    </div>
  );
};

export default VideoNavigation;
