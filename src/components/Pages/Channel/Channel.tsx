import * as React from 'react';
import styles from './Channel.module.css';
import { useParams } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import getNoun from '../../../scripts/getNoun';
import { useDispatch } from 'react-redux';
import channelSlice from '../../../store/reducers/channelSlice';

import checkSVG from '../../../assets/images/UI/check_green.svg';
import SubscribeButton from '../../UI/ChannelPromotion/SubscribeButton/SubscribeButton';
interface IChannelPageProps {
}

const ChannelPage: React.FC<IChannelPageProps> = (props) => {
    const {privateName} = useParams();
    const thisChannel = useTSelector(state => state.channels.list)
                    .find(channel => channel.privateName === privateName);
    const subscribes = useTSelector(state => state.channels.subscribed);
    const dispatch = useDispatch();

    const subscribeClickHandler = (): void => {
        if (thisChannel) {
            dispatch(channelSlice.actions.subscribe(thisChannel));
        }
    }

    return (
        <div className={styles.body}>
            {
                thisChannel?.header
                &&
                <img src={thisChannel?.header} alt="header" className={styles.header} />
            }

            <div className={styles.main}>
                <div className={styles.channel}>
                    <div className={styles.channel__item}>
                        <img src={thisChannel?.avatar} alt={thisChannel?.privateName} className={styles.avatar} />
                        <div className={styles.channel__info}>
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
            </div>
        </div>
    );
};

export default ChannelPage;
