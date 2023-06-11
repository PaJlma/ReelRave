import * as React from 'react';
import styles from '../DirectPage.module.scss';
import { useTSelector } from './../../../hooks/redux';
import VideoMediumCase from '../../UI/VideoMediumCase/VideoMediumCase';
import EmptyList from './../../UI/EmptyList/EmptyList';

interface IRecomendationsProps {
}

const Recomendations: React.FC<IRecomendationsProps> = (props) => {
  return (
    <div className={styles.body}>
      <legend>Рекомендации</legend>

        <div className={styles.centered}>
          <EmptyList />
        </div>
    </div>
  );
};

export default Recomendations;
