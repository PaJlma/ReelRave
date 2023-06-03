import * as React from 'react';
import styles from './Mist.module.css';

interface IMistProps {
    active?: boolean;
    onClick?: () => void;
}

const Mist: React.FunctionComponent<IMistProps> = ({ active, onClick, ...props }) => {
  return (
    <div 
      className={`${styles.body} ${active ? styles.active : ''}`} 
      onClick={onClick}
    />
  );
};

export default Mist;