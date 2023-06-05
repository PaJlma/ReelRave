import * as React from 'react';
import styles from './ChannelPagePromotion.module.css';
import { IChannel } from '../../../../types/channelTypes';
import SubscribeButton from '../../../UI/ChannelPromotion/SubscribeButton/SubscribeButton';
import getNoun from '../../../../scripts/getNoun';

interface IChannelPagePromotionProps {
    channel?: IChannel;
}

const ChannelPagePromotion: React.FunctionComponent<IChannelPagePromotionProps> = ({ channel, ...props }) => {
    const thisChannel = channel;

    return (
        <div className={styles.body}>
            <div className={styles.item}>
                <img src={thisChannel?.avatar} alt={thisChannel?.privateName} className={styles.avatar} />
                <div className={styles.info}>
                    <h5>{ thisChannel?.publicName }</h5>
                    <div className={styles.flex}>
                        <p>{ `@${thisChannel?.privateName}` }</p>
                        <p>{ `${thisChannel?.subscribesCount} ${getNoun(thisChannel?.subscribesCount, 'подписчик', 'подписчика', 'подписчиков')}` }</p>
                        <p>{ `${thisChannel?.videos.length} видео` }</p>
                    </div>
                </div>
            </div>
            <div className={styles.subscribeButton}>
                <SubscribeButton channel={thisChannel} />
            </div>
        </div>
    );
};

export default ChannelPagePromotion;
