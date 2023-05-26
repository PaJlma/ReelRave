import * as React from 'react';
import styles from './VideoCase.module.css';
import { useTSelector } from './../../../hooks/redux';
import { IChannel } from './../../../types/channelTypes';
import { NavLink } from 'react-router-dom';
import showTimeAgo from './../../../scripts/timeManager';

interface IVideoCaseProps {
  id: string;
  preview: string;
  title: string;
  viewsCount: number;
  time: string;
  channelPrivateName: string;
}

const VideoCase: React.FC<IVideoCaseProps> = (
  { 
    id,
    preview, 
    title, 
    viewsCount, 
    time, 
    channelPrivateName, 
    ...props 
  }) => {
    const channel: IChannel | undefined = useTSelector(state => state.channels.list)
          .find(channel => channel.privateName === channelPrivateName);
        
    const timeAgo = showTimeAgo(time);

    return (
      <NavLink className={styles.body} to={`/video/${id}`}>
            <img src={preview} alt={title} className={styles.preview} />
            <div className={styles.wrapper}>
              <NavLink to={`/@${channelPrivateName}`}>
                <img src={channel?.avatar} alt={channel?.publicName} className={styles.avatar} />
              </NavLink>
              <div className={styles.info}>
                <h5 className={styles.title}>{title}</h5>
                <NavLink to={`/@${channelPrivateName}`}>
                  <p className={styles.channel}>{channel?.publicName}</p>
                </NavLink>
                <div className={styles.flex}>
                  <p>{viewsCount} просмотров</p>
                  <p>{timeAgo} назад</p>
                </div>
              </div>
            </div>
      </NavLink>
    );
};

export default VideoCase;
