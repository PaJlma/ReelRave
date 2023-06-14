import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTSelector } from '../../../hooks/redux';
import optionsSlice from '../../../store/reducers/optionsSlice';
import SlidingSidebar from '../../Sidebar/SlidingSidebar/SlidingSidebar';
import Mist from '../../UI/Mist/Mist';
import styles from './Accounts.module.scss';

interface IRegistrationProps {
}

const Registration: React.FunctionComponent<IRegistrationProps> = (props) => {
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
                <h5 className={styles.title}>Регистрация</h5>
                <form>
                    <fieldset>
                        <legend>Логин</legend>
                        <input type="text" required />
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <input type="email" required />
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <input type="password" required />
                    </fieldset>
                    <fieldset>
                        <legend>Повторите пароль</legend>
                        <input type="password" required />
                    </fieldset>
                    <button type='submit'>Отправить</button>
                    <Link to='/login' className={styles.href}>Уже есть аккаунт?</Link>
                </form>
            </div>
        </div>
    );
};

export default Registration;
