import * as React from 'react';
import styles from './Logotype.module.scss';

import logotype from '../../../assets/images/UI/logotype.svg';
import { NavLink } from 'react-router-dom';

interface ILogotypeProps {
}

const Logotype: React.FunctionComponent<ILogotypeProps> = (props) => {
  return (
    <NavLink to='/'>
        <img 
            className={styles.body} 
            src={logotype} 
            alt="Reel Rave" 
            title="Главная страница ReelRave" 
        />
    </NavLink>
    
  );
};

export default Logotype;
