import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

interface IButtonProps {
    isNav: boolean;
    to: string;
    text: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ isNav, to, text, ...props }) => {
  if (isNav) {
    return (
        <NavLink to={to} className={styles.body}>
            { text }
        </NavLink>
    );
  } else {
    return (
        <button className={styles.body}>
            { text }
        </button>
    );
  }
};

export default Button;
