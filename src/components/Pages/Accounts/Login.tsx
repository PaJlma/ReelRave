import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import optionsSlice from '../../../store/reducers/optionsSlice';
import SlidingSidebar from '../../Sidebar/SlidingSidebar/SlidingSidebar';
import Mist from '../../UI/Mist/Mist';
import styles from './Accounts.module.scss';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const options = useTSelector(state => state.options);
    const dispatch = useDispatch();

    const onMistClick = (): void => {
        dispatch(optionsSlice.actions.toggleSlidingSidebar());
      } 

    return (
        <div className={styles.body}>
            <Mist active={options.isSlidingSidebarActive} onClick={onMistClick} />
            <SlidingSidebar />
            <div className={styles.window}>
                <h5 className={styles.title}>Авторизация</h5>
                <form>
                    <fieldset>
                        <legend>Email</legend>
                        <input type="email" required />
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <input type="password" required />
                    </fieldset>
                    <button type='submit'>Отправить</button>
                    <Link to='/registration' className={styles.href}>Нет аккаунта?</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
