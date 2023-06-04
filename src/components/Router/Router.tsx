import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from '../Pages/History/History';
import Home from '../Pages/Home/Home';
import Video from '../Pages/Video/Video';
import DefaultSidebar from '../Sidebar/DefaultSidebar/DefaultSidebar';
import SlidingSidebar from '../Sidebar/SlidingSidebar/SlidingSidebar';

import styles from './Router.module.css';
import Liked from './../Pages/Liked/Liked';
import CategoriesPage from './../Pages/Categories/Categories';

interface IRouterProps {
}

const Router: React.FC<IRouterProps> = (props) => {
  return (
    <div className={styles.body}>
        <Routes>
            <Route path='/' element={<DefaultSidebar />} />
            <Route path='/history' element={<DefaultSidebar />} />
            <Route path='/liked' element={<DefaultSidebar />} />
            <Route path='/categories/:category' element={<DefaultSidebar />} />
            <Route path='/video/:id' element={<SlidingSidebar />} />
        </Routes>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:id' element={<Video />} />
            <Route path='/history' element={<History />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/categories/:category' element={<CategoriesPage />} />
        </Routes>
    </div>
  );
};

export default Router;