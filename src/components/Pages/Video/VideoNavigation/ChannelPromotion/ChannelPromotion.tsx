import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useTSelector } from '../../../../../hooks/redux';
import styles from './ChannelPromotion.module.css';

interface IChannelPromotionProps {
    privateName?: string;
}

const ChannelPromotion: React.FC<IChannelPromotionProps> = ({ privateName, ...props }) => {
    const channel = useTSelector(state => state.channels.list).find(channel => channel.privateName === privateName);

    return (
        <div className={styles.body}>
            <NavLink to={`/channel/${privateName}`}>
                <img src={channel?.avatar} alt={channel?.publicName} className={styles.avatar} />
            </NavLink>
            <div className={styles.info}>
                <NavLink to={`/channel/${privateName}`}>
                    <h5 className={styles.channel}>{channel?.publicName}</h5>
                </NavLink>
                <p className={styles.counter}>{channel?.subscribesCount}</p>
            </div>
            <button>Подписаться</button>
        </div>
    );
};

export default ChannelPromotion;
