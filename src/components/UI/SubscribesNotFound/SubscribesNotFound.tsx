import * as React from 'react';
import styles from './SubscribesNotFound.module.css';

import sleepyCatPNG from '../../../assets/images/UI/sleepy-cat.png';

interface ISubscribesNotFoundProps {
}

const SubscribesNotFound: React.FC<ISubscribesNotFoundProps> = (props) => {
  return (
    <div className={styles.body}>
        <img src={sleepyCatPNG} alt="sleepy ass cat" title='ZzZzZz... Sleepy ass cat... ZzZzZz...' />
        <p>Вы ни на кого не подписаны!</p>
    </div>
  );
};

export default SubscribesNotFound;
