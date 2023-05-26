import * as React from 'react';
import RoundButton from '../UI/RoundButton/RoundButton';
import styles from './Header.module.css';

import burgerMenuSVG from '../../assets/images/UI/burger-menu.svg';
import settingsSVG from '../../assets/images/UI/settings.svg';

import Logotype from '../UI/Logotype/Logotype';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <header className={styles.body}>
            <div className={styles.wrapper}>
                <RoundButton>
                    <img src={burgerMenuSVG} alt="burger-menu" />
                </RoundButton>
                <Logotype />
            </div>

            <Search placeholder='Поиск' />

            <div className={styles.wrapper}>
                <Button isNav={true} to='/login' text='Войти' />
                <Button isNav={true} to='/registration' text='Зарегистрироваться' />
                <RoundButton>
                    <img src={settingsSVG} style={{width: '1.4375rem', height: '1.4375rem'}} alt="settings" />
                </RoundButton>
            </div>
        </header>
    );
}

export default Header;