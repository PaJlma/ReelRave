import * as React from 'react';
import styles from './Channel.module.css';
import { useParams } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';

interface IChannelPageProps {
}

const ChannelPage: React.FC<IChannelPageProps> = (props) => {
    const {privateName} = useParams();
    const channel = useTSelector(state => state.channels.list)
                    .find(channel => channel.privateName === privateName);

    return (
        <div className={styles.body}>
            
        </div>
    );
};

export default ChannelPage;
