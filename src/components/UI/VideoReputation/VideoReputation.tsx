import * as React from 'react';
import styles from './VideoReputation.module.scss';

import likeSVG from '../../../assets/images/UI/like.svg';
import dislikeSVG from '../../../assets/images/UI/dislike.svg';
import likeActiveSVG from '../../../assets/images/UI/like-active.svg';
import dislikeActiveSVG from '../../../assets/images/UI/dislike-active.svg';

import { useTSelector } from './../../../hooks/redux';
import { useDispatch } from 'react-redux';
import videoSlice from './../../../store/reducers/videoSlice';

interface IVideoReputationProps {
    videoID?: string;
}

const VideoReputation: React.FC<IVideoReputationProps> = ({ videoID, ...props }) => {
    const videos =  useTSelector(state => state.videos);
    const video = videos.list.find(video => video.id === videoID);
    const isVideoInLiked = videos.liked.some(video => video.id === videoID);
    const isVideoInDisliked = videos.disliked.some(video => video.id === videoID);
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        if (video) {
            dispatch(videoSlice.actions.like(video))
        }
    }

    const dislikeClickHandler = () => {
        if (video) {
            dispatch(videoSlice.actions.dislike(video))
        }
    }

    return (
        <div className={styles.body}>
            <div onClick={likeClickHandler} className={styles.like}>
                {
                    isVideoInLiked 
                    ?
                    <img src={likeActiveSVG} alt="liked" />
                    :
                    <img src={likeSVG} alt="like" />
                }
                
                <p>{video?.likesCount}</p>
            </div>
            <div onClick={dislikeClickHandler} className={styles.dislike}>
                {
                    isVideoInDisliked
                    ?
                    <img src={dislikeActiveSVG} alt="disliked" />
                    :
                    <img src={dislikeSVG} alt="dislike" />
                }
                <p>{video?.dislikesCount}</p>
            </div>
        </div>
    );
};

export default VideoReputation;
