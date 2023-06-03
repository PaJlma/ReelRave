import * as React from 'react';
import styles from './Mist.module.css';

interface IMistProps {
    active?: boolean;
}

const Mist: React.FunctionComponent<IMistProps> = ({ active, ...props }) => {
  return <div className={`${styles.body} ${active ? styles.active : ''}`} />
};

export default Mist;