import * as React from 'react';
import styles from './SubscribeButton.module.css';
import { IChannel } from './../../../../types/channelTypes';
import { useTSelector } from '../../../../hooks/redux';

import checkSVG from '../../../../assets/images/UI/check_green.svg';
import channelSlice from '../../../../store/reducers/channelSlice';
import { useDispatch } from 'react-redux';

interface ISubscribeButtonProps {
    channel?: IChannel;
}

const SubscribeButton: React.FC<ISubscribeButtonProps> = ({ channel, ...props }) => {
    const subscribes = useTSelector(state => state.channels.subscribed);
    const dispatch = useDispatch();

    const subscribeClickHandler = (): void => {
        if (channel) {
            dispatch(channelSlice.actions.subscribe(channel));
        }
    }

    return (
        <div className={styles.body}>
            {
                subscribes.some(channel => channel.privateName === channel?.privateName)
                ?
                <button 
                className={styles.subscribed} 
                onClick={subscribeClickHandler} >
                    Вы подписаны 
                    <img src={checkSVG} className={styles.checked} alt="checked" />
                </button>
                :
                <button className={styles.subscribe} onClick={subscribeClickHandler} >Подписаться</button>
            }
        </div>
  );
};

export default SubscribeButton;