import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Video from '../Pages/Video/Video';
import DefaultSidebar from '../Sidebar/DefaultSidebar/DefaultSidebar';
import SlidingSidebar from '../Sidebar/SlidingSidebar/SlidingSidebar';

import styles from './Router.module.css';

interface IRouterProps {
}

const Router: React.FC<IRouterProps> = (props) => {
  return (
    <div className={styles.body}>
        <Routes>
            <Route path='/' element={<DefaultSidebar />} />
            <Route path='/video/:id' element={<SlidingSidebar />} />
        </Routes>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:id' element={<Video />} />
        </Routes>
    </div>
  );
};

export default Router;