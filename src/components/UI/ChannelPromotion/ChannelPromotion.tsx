import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import styles from './ChannelPromotion.module.scss';
import getNoun from './../../../scripts/getNoun';

import confirmedSVG from '../../../assets/images/UI/confirmed.svg';
import checkSVG from '../../../assets/images/UI/check_green.svg';
import { useDispatch } from 'react-redux';
import channelSlice from './../../../store/reducers/channelSlice';
import SubscribeButton from './SubscribeButton/SubscribeButton';

interface IChannelPromotionProps {
    privateName?: string;
}

const ChannelPromotion: React.FC<IChannelPromotionProps> = ({ privateName, ...props }) => {
    const channels = useTSelector(state => state.channels.list);
    const subscribes = useTSelector(state => state.channels.subscribed);
    const thisChannel = channels.find(channel => channel.privateName === privateName);
    const dispatch = useDispatch();

    const subscribeClickHandler = (): void => {
        if (thisChannel) {
            dispatch(channelSlice.actions.subscribe(thisChannel));
        }
    }

    return (
        <div className={styles.body}>
            <NavLink to={`/channel/${privateName}`}>
                <img src={thisChannel?.avatar} alt={thisChannel?.publicName} className={styles.avatar} />
            </NavLink>
            <div className={styles.info}>
                <NavLink className={styles.channelBox} to={`/channel/${privateName}`}>
                    <h5 className={styles.channel }>{thisChannel?.publicName}</h5>
                    {
                        thisChannel?.isConfirmed && <img src={confirmedSVG} className={styles.confirmed} alt="confirmed" />
                    }
                </NavLink>
                <p className={styles.counter}>
                    {`${thisChannel?.subscribesCount} 
                    ${getNoun(thisChannel?.subscribesCount, 'подписчик', 'подписчика', 'подписчиков')}`}
                </p>
            </div>
            <div className={styles.subscribeButton}>
                <SubscribeButton channel={thisChannel} />
            </div>
        </div>
    );
};

export default ChannelPromotion;
