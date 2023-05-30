import * as React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import DefaultSidebar from './components/Sidebar/DefaultSidebar/DefaultSidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Video from './components/Pages/Video/Video';
import SlidingSidebar from './components/Sidebar/SlidingSidebar/SlidingSidebar';
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