import * as React from 'react';
import styles from './SubscribesNotFound.module.scss';

import attentionSVG from '../../../assets/images/UI/attention.svg';

interface ISubscribesNotFoundProps {
}

const SubscribesNotFound: React.FC<ISubscribesNotFoundProps> = (props) => {
  return (
    <div className={styles.body}>
        <img src={attentionSVG} alt="attention" title='Attention!' />
        <p>Вы ни на кого не подписаны!</p>
    </div>
  );
};

export default SubscribesNotFound;
