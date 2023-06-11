import * as React from 'react';
import Player from '../../UI/Player/Player';
import styles from './Video.module.scss';

import { useTSelector } from '../../../hooks/redux';
import { useParams } from 'react-router-dom';
import VideoInfo from './VideoInfo/VideoInfo';
import Mist from './../../UI/Mist/Mist';
import { useDispatch } from 'react-redux';
import optionsSlice from './../../../store/reducers/optionsSlice';
import VideosSidebar from '../../UI/VideosSidebar/VideosSidebar';
import { useSelector } from 'react-redux';
import videoSlice from './../../../store/reducers/videoSlice';

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

  React.useEffect(() => {
    if (video) {
      dispatch(videoSlice.actions.addInHistory(video));
    }
  }, [id]);

  return (
    <div className={styles.body}>
      <div className={styles.video}>
        <Player video={video?.video} autoPlay={true} />
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
      </div>
    
      <VideosSidebar videoID={video?.id} />
      <Mist active={options.isSlidingSidebarActive} onClick={onMistClick} />
    </div>
  );
};

export default Video;