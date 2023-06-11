import * as React from 'react';
import styles from './Separator.module.scss';

interface ISeparatorProps {
}

const Separator: React.FC<ISeparatorProps> = (props) => {
  return <div className={styles.body} />;
};

export default Separator;
