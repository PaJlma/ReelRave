import * as React from 'react';
import styles from './VideoCommentaries.module.css';
import { ICommentary } from './../../../../../types/videoTypes';
import getNoun from './../../../../../scripts/getNoun';
import VideoCommentary from '../../../../UI/VideoCommentary/VideoCommentary';
import { useTSelector } from './../../../../../hooks/redux';
import TextArea from '../../../../UI/TextArea/TextArea';

interface IVideoCommentariesProps {
    commentaries?: ICommentary[];
}

const VideoCommentaries: React.FC<IVideoCommentariesProps> = ({ commentaries, ...props }) => {
  return (
    <div className={styles.body}>
        <p className={styles.countee}>{`${commentaries?.length} ${getNoun(commentaries?.length, 'комментарий', 'комментария', 'комментариев')}`}</p>

        <TextArea width='100%' />

        {
          commentaries?.map(commentary => <VideoCommentary
            key={commentary.channelPrivateName} 
            channelPrivateName={commentary.channelPrivateName}
            time={commentary.time}
            text={commentary.text}
            likesCount={commentary.likesCount}
            dislikesCount={commentary.dislikesCount}
          />)
        }
    </div>
  );
};

export default VideoCommentaries;
