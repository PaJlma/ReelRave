import * as React from 'react';
import styles from './Channel.module.scss';
import { useParams } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import { useDispatch } from 'react-redux';
import channelSlice from '../../../store/reducers/channelSlice';
import ChannelNavigation from './ChannelNavigation/ChannelNavigation';
import ChannelPagePromotion from './ChannelPagePromotion/ChannelPagePromotion';
import ChannelVideos from './ChannelVideos/ChannelVideos';
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
                <ChannelPagePromotion channel={thisChannel} />

                <ChannelNavigation channelPrivateName={thisChannel?.privateName} />

                <ChannelVideos channel={thisChannel} />
            </div>
        </div>
    );
};

export default ChannelPage;
