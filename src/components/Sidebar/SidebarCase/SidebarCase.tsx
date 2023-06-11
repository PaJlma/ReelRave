import * as React from 'react';
import styles from './SidebarCase.module.scss';
import { NavLink } from 'react-router-dom';

interface ISidebarCaseProps {
    image?: string;
    text?: string;
    to: string;
}

const SidebarCase: React.FC<ISidebarCaseProps> = ({ image, text, to, ...props }) => {
  return (
    <NavLink to={to}>
      <div className={styles.body}>
        <img src={image} alt={text} />
        <p>{text}</p>
      </div>
    </NavLink>
  );
};

export default SidebarCase;
