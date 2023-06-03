import * as React from 'react';
import styles from './VideoCommentaries.module.css';
import { ICommentary } from './../../../../../types/videoTypes';
import getNoun from './../../../../../scripts/getNoun';
import VideoCommentary from '../../../../UI/VideoCommentary/VideoCommentary';
import { useTSelector } from './../../../../../hooks/redux';
import TextArea from '../../../../UI/TextArea/TextArea';
import { useDispatch } from 'react-redux';
import videoSlice from './../../../../../store/reducers/videoSlice';

interface IVideoCommentariesProps {
    commentaries?: ICommentary[];
    videoID?: string;
}

const VideoCommentaries: React.FC<IVideoCommentariesProps> = ({ commentaries, videoID, ...props }) => {
  const [textareaValue, setTextareaValue] = React.useState('');
  const dispatch = useDispatch();

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>):void => {
    setTextareaValue(event.target.value);
  }

  const submitTextAreaHandler = () => {
    const commentary: ICommentary = {
      channelPrivateName: 'FUCKER',
      time: '2023 6 3 11 40 22',
      text: textareaValue,
      likesCount: 0,
      dislikesCount: 0,
    }
    dispatch(videoSlice.actions.madeCommentary([commentary, videoID]))
    setTextareaValue('');
  }

  return (
    <div className={styles.body}>
        <p className={styles.counter}>{`${commentaries?.length} ${getNoun(commentaries?.length, 'комментарий', 'комментария', 'комментариев')}`}</p>

        <TextArea
          width='100%' 
          value={textareaValue} 
          onChange={textareaChangeHandler}
          onClick={submitTextAreaHandler}
        />

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
