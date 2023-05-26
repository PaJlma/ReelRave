import * as React from 'react';
import styles from './RoundButton.module.css';

interface IRoundButtonProps {
    children: React.ReactChild | React.ReactNode;
    onClick?: () => void;
}

const RoundButton: React.FC<IRoundButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <div onClick={onClick} className={styles.body}>
        { children }
    </div>
  );
};

export default RoundButton;
