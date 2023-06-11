import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarChannelCase.module.scss';

import confirmedSVG from '../../../assets/images/UI/confirmed.svg';

interface ISidebarChannelCaseProps {
    to: string;
    avatar?: string;
    text?: string;
    isConfirmed?: boolean;
}

const SidebarChannelCase: React.FC<ISidebarChannelCaseProps> = ({ to, avatar, text, isConfirmed, ...props }) => {
  return (
    <NavLink to={to}>
        <div className={styles.body}>
            <img className={styles.avatar} src={avatar} alt={text} />
            <div className={styles.info}>
                <p>{text}</p>
                {
                  isConfirmed
                  &&
                  <img className={styles.confirmed} src={confirmedSVG} alt="confirmed" />
                }
            </div>
        </div>
    </NavLink>
  );
};

export default SidebarChannelCase;
