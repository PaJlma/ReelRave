import * as React from 'react';
import Player from '../../UI/Player/Player';
import styles from './Video.module.css';

import { useTSelector } from '../../../hooks/redux';
import { useParams } from 'react-router-dom';
import VideoInfo from './VideoInfo/VideoInfo';
import Mist from './../../UI/Mist/Mist';
import { useDispatch } from 'react-redux';
import optionsSlice from './../../../store/reducers/optionsSlice';

interface IVideoProps {
}

const Video: React.FC<IVideoProps> = (props) => {
  const { id } = useParams();
  const video = useTSelector(state => state.videos.list).find(video => video.id === id);
  const dispatch = useDispatch();
  const options = useTSelector(state => state.options);

  const onMistClick = (): void => {
    dispatch(optionsSlice.actions.toggleSlidingSidebar());
  }

  return (
    <div className={styles.body}>
      <Player video={video?.video} autoPlay={false} />
      <VideoInfo 
        time={video?.time} 
        viewsCount={video?.viewsCount} 
        videoID={id} 
        title={video?.title} 
        privateName={video?.channelPrivateName} 
        description={video?.description}
        commentaries={video?.commentaries}
        category={video?.category}
      />
      <Mist active={options.isSlidingSidebarActive} onClick={onMistClick} />
    </div>
  );
};

export default Video;