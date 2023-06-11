import * as React from 'react';
import styles from './ChannelNavigation.module.scss';
import { NavLink } from 'react-router-dom';

interface IChannelNavigationProps {
    channelPrivateName?: string;
}

const ChannelNavigation: React.FC<IChannelNavigationProps> = ({ channelPrivateName, ...props }) => {
  return (
    <div className={styles.body}>
        <NavLink to={`/channel/${channelPrivateName}`} className={styles.item}>
            Видео
        </NavLink>
    </div>
  );
};

export default ChannelNavigation;
