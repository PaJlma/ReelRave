import * as React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import DefaultSidebar from './components/Sidebar/DefaultSidebar/DefaultSidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.main}>
        <DefaultSidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;