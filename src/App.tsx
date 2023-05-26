import * as React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import DefaultSidebar from './components/Sidebar/DefaultSidebar/DefaultSidebar';
interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.main}>
        <DefaultSidebar />
      </div>
    </div>
  );
};

export default App;