import * as React from 'react';
import styles from './ChannelVideos.module.css';
import { IChannel } from './../../../../types/channelTypes';
import { useTSelector } from '../../../../hooks/redux';
import { IVideo } from '../../../../types/videoTypes';
import VideoMediumCase from '../../../UI/VideoMediumCase/VideoMediumCase';

interface IChannelVideosProps {
    channel?: IChannel;
}

const ChannelVideos: React.FC<IChannelVideosProps> = ({ channel, ...props }) => {
    const thisChannel = channel;
    const allVideos = useTSelector(state => state.videos.list);

    // TODO:
    // Разработать такую систему, чтобы не было этой ебанины снизу

    const channelVideos: IVideo[] = [];
    thisChannel?.videos.forEach(id => {
        const video = allVideos.find(video => video.id === id);

        if (video) {
            channelVideos.push(video);
        };
    });

    // Той что сверху

    return (
        <div className={styles.body}>
            {
                channelVideos.map(video => <VideoMediumCase 
                    key={video.id}
                    videoID={video.id}
                    channelPrivateName={video.channelPrivateName}
                    preview={video.preview}
                    title={video.title}
                    viewsCount={video.viewsCount}
                    description={video.description}
                />)
            }
        </div>
    );
};

export default ChannelVideos;
