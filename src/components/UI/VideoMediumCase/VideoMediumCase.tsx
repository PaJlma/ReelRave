import * as React from 'react';
import styles from './VideoMediumCase.module.css';
import { NavLink } from 'react-router-dom';
import { channel } from 'redux-saga';
import { useTSelector } from './../../../hooks/redux';
import getNoun from './../../../scripts/getNoun';
import sliceStringTo from '../../../scripts/sliceStringTo';

interface IVideoMediumCaseProps {
    videoID?: string;
    title?: string;
    preview?: string;
    viewsCount?: number;
    description?: string;
    channelPrivateName?: string;
}

const VideoMediumCase: React.FC<IVideoMediumCaseProps> = (
    {
        videoID,
        title,
        preview,
        viewsCount,
        description,
        channelPrivateName,
    }
) => {
    const channel = useTSelector(state => state.channels.list)
                    .find(channel => channel.privateName === channelPrivateName);

    return (
        <NavLink to={`/video/${videoID}`} className={styles.body}>
            <img src={preview} alt={title} className={styles.preview} />
            <div className={styles.info}>
                <h5 className={styles.title}>{ title }</h5>
                <div className={styles.flex}>
                    <p className={styles.channel}>{ channel?.publicName }</p>
                    <div className={styles.circle} />
                    <p>{`${viewsCount} ${getNoun(viewsCount, 'просмотр', 'просмотра', 'просмотров')}`}</p>
                </div>
                <p className={styles.description}>{ sliceStringTo(description, 60) }</p>
            </div>
        </NavLink>
    );
};

export default VideoMediumCase;
