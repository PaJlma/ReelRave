import * as React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Router from './components/Router/Router';
interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className={styles.body}>
      <Header />
      <Router />
    </div>
  );
};

export default App;