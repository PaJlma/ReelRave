import * as React from 'react';
import styles from './Player.module.scss';

interface IPlayerProps {
    video?: string;
    autoPlay: boolean;
}

const Player: React.FC<IPlayerProps> = ({ video, autoPlay, ...props }) => {
    return (
        <div className={styles.body}>
            <video src={video} controls autoPlay={autoPlay} />
        </div>
    );
};

export default Player;
