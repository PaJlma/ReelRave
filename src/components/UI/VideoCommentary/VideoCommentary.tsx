import * as React from 'react';
import styles from './VideoCommentary.module.scss';
import { ICommentary } from './../../../types/videoTypes';
import channels from './../../../assets/mock/channels';
import { useTSelector } from './../../../hooks/redux';
import showTimeAgo from './../../../scripts/timeManager';

import likeSVG from '../../../assets/images/UI/like.svg';
import dislikeSVG from '../../../assets/images/UI/dislike.svg';
import { NavLink } from 'react-router-dom';

const VideoCommentary: React.FC<ICommentary> = ({ channelPrivateName, time, text, likesCount, dislikesCount }) => {
    const channel = useTSelector(state => state.channels.list)
                    .find(channel => channel.privateName === channelPrivateName);

    return (
        <div className={styles.body}>
            <NavLink to={`/channels/${channel?.privateName}`}>
                <img src={channel?.avatar} alt={channel?.publicName} className={styles.avatar} />
            </NavLink>
            <div className={styles.info}>
                <div className={styles.flex}>
                    <NavLink to={`/channels/${channel?.privateName}`}>
                        <h5>{ channel?.publicName }</h5>
                    </NavLink>
                    <p>{`${showTimeAgo(time)} назад`}</p>
                </div>
                <p className={styles.text}>
                    { text }
                </p>
                <div className={styles.flex}>
                    <div className={styles.reputation}>
                        <img src={likeSVG} alt="like" />
                        <p>{ likesCount }</p>
                    </div>
                    <div className={styles.reputation}>
                        <img src={dislikeSVG} alt="dislike" />
                        <p>{ dislikesCount }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCommentary;
