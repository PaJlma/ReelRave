import * as React from 'react';
import styles from './Login.module.scss';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div className={styles.body}>
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
            </form>
        </div>
    </div>
  );
};

export default Login;
