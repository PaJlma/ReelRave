import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from '../Pages/History/History';
import Home from '../Pages/Home/Home';
import Video from '../Pages/Video/Video';
import DefaultSidebar from '../Sidebar/DefaultSidebar/DefaultSidebar';
import SlidingSidebar from '../Sidebar/SlidingSidebar/SlidingSidebar';

import styles from './Router.module.scss';
import Liked from './../Pages/Liked/Liked';
import CategoriesPage from './../Pages/Categories/Categories';
import Recomendations from './../Pages/Recomendations/Recomendations';
import ChannelPage from './../Pages/Channel/Channel';
import Registration from './../Pages/Registration/Registration';
import Login from './../Pages/Login/Login';

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
            <Route path='/recomendations' element={<DefaultSidebar />} />
            <Route path='/channel/:privateName' element={<DefaultSidebar />} />
            <Route path='/video/:id' element={<SlidingSidebar />} />
        </Routes>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:id' element={<Video />} />
            <Route path='/history' element={<History />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/categories/:category' element={<CategoriesPage />} />
            <Route path='/recomendations' element={<Recomendations />} />
            <Route path='/channel/:privateName' element={<ChannelPage />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
};

export default Router;