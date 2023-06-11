import * as React from 'react';
import { useTSelector } from '../../../hooks/redux';
import VideoMiniCase from '../VideoMiniCase/VideoMiniCase';
import styles from './VideosSidebar.module.scss';

interface IVideosSidebarProps {
    videoID?: string;
}

const VideosSidebar: React.FC<IVideosSidebarProps> = ({ videoID, ...props }) => {
  const videos = useTSelector(state => state.videos.list)
                  .filter(video => video.id !== videoID);

  return (
    <div className={styles.body}>
        {
          videos.map(video => <VideoMiniCase 
            key={video.id}
            videoID={video.id}
            channelPrivateName={video.channelPrivateName}
            preview={video.preview}
            title={video.title}
            viewsCount={video.viewsCount}
            time={video.time}
          />)
        }
    </div>
  );
};

export default VideosSidebar;
