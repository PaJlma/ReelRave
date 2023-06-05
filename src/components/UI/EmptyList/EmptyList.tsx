import * as React from 'react';
import styles from './EmptyList.module.css';

import catSVG from '../../../assets/images/UI/sleepy-cat.png';

interface IEmptyListProps {
}

const EmptyList: React.FC<IEmptyListProps> = (props) => {
  return (
    <div className={styles.body}>
        <img src={catSVG} alt="sleepy ass cat" title="ZzZzZz... Sleepy ass cat... ZzZzZz..." />
        <h5>Здесь пусто...</h5>
    </div>
  );
};

export default EmptyList;
