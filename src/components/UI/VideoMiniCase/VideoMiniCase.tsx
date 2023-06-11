import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import getNoun from '../../../scripts/getNoun';
import showTimeAgo from '../../../scripts/timeManager';
import styles from './VideoMiniCase.module.scss';

interface IVideoMiniCaseProps {
    videoID?: string;
    title?: string;
    preview?: string;
    channelPrivateName?: string;
    viewsCount?: number;
    time?: string;
}

const VideoMiniCase: React.FunctionComponent<IVideoMiniCaseProps> = (
    {   
        videoID,
        title,
        preview, 
        channelPrivateName,
        viewsCount,
        time
    }
) => {
    const channel = useTSelector(state => state.channels.list)
                    .find(channel => channel.privateName === channelPrivateName);

    return (
        <NavLink to={`/video/${videoID}`} className={styles.body}>
            <img src={preview} alt={title} className={styles.preview} />
            <div className={styles.info}>
                <h5 className={styles.title}>{ title }</h5>
                <p className={styles.channel}>{ channel?.publicName }</p>
                <div className={styles.flex}>
                    <p>{`${viewsCount} ${getNoun(viewsCount, 'просмотр', 'просмотра', 'просмотров')}`}</p>
                    <p>{`${showTimeAgo(time)} назад`}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default VideoMiniCase;
