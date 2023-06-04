import * as React from 'react';
import RoundButton from '../UI/RoundButton/RoundButton';
import styles from './Header.module.css';

import burgerMenuSVG from '../../assets/images/UI/burger-menu.svg';
import settingsSVG from '../../assets/images/UI/settings.svg';

import Logotype from '../UI/Logotype/Logotype';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import optionsSlice from './../../store/reducers/optionsSlice';
import { Route, Routes } from 'react-router-dom';

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = (props) => {
    const dispatch = useDispatch();

    const burgerMenuDefaultClickHandler = () => {
        dispatch(optionsSlice.actions.toggleDefaultSidebar());
    }

    const burgerMenuSlidingClickHandler = () => {
        dispatch(optionsSlice.actions.toggleSlidingSidebar());
    }

    return (
        <header className={styles.body}>
            <div className={styles.wrapper}>
                <Routes>
                    <Route path='/' element={<RoundButton onClick={burgerMenuDefaultClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>} />
                    <Route path='/history' element={<RoundButton onClick={burgerMenuDefaultClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>} />
                    <Route path='/liked' element={<RoundButton onClick={burgerMenuDefaultClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>} />
                    <Route path='/categories/:category' element={<RoundButton onClick={burgerMenuDefaultClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>} />
                    <Route path='/video/:id' element={<RoundButton onClick={burgerMenuSlidingClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>} />
                </Routes>
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