import * as React from 'react';
import styles from './VideoDescription.module.css';

interface IVideoDescriptionProps {
    description?: string;
}

const VideoDescription: React.FC<IVideoDescriptionProps> = ({ description, ...props }) => {
  return (
    <div className={styles.body}>
        <h5>Описание</h5>
        <p>{ description }</p>
    </div>
  );
};

export default VideoDescription;
