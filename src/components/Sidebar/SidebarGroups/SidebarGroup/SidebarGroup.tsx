import * as React from 'react';
import styles from './SidebarGroup.module.css';

interface ISidebarGroupProps {
    children: React.ReactElement | React.ReactNode;
}

// <legend> Group title </legend>

const SidebarGroup: React.FC<ISidebarGroupProps> = ({ children, ...props }) => {
  return (
    <div className={styles.body}>
        {children}
    </div>
  );
};

export default SidebarGroup;
