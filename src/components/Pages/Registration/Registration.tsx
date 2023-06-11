import * as React from 'react';
import styles from './Registration.module.scss';

interface IRegistrationProps {
}

const Registration: React.FunctionComponent<IRegistrationProps> = (props) => {
  return (
    <div className={styles.body}>
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
            </form>
        </div>
    </div>
  );
};

export default Registration;
