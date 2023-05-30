import * as React from 'react';
import SidebarCase from '../SidebarCase/SidebarCase';
import styles from './SlidingSidebar.module.css';
import Separator from '../../UI/Separator/Separator';

import homeSVG from '../../../assets/images/UI/home.svg';
import recomendationsSVG from '../../../assets/images/UI/recomendations.svg';
import likedSVG from '../../../assets/images/UI/likes.svg';
import historySVG from '../../../assets/images/UI/history.svg';

import sportSVG from '../../../assets/images/UI/sport.svg';
import gamesSVG from '../../../assets/images/UI/games.svg';
import petsSVG from '../../../assets/images/UI/pets.svg';
import wildSVG from '../../../assets/images/UI/wild.svg';
import blogsSVG from '../../../assets/images/UI/blogs.svg';
import broadcastsSVG from '../../../assets/images/UI/broadcasts.svg';

import { useTSelector } from './../../../hooks/redux';

import '../../../index.css';
import SidebarGroup from '../SidebarGroup/SidebarGroup';
import Subscribes from './../Subscribes/Subscribes';

interface ISlidingSidebarProps {
}

const SlidingSidebar: React.FC<ISlidingSidebarProps> = (props) => {
    const subscribes = useTSelector(state => state.channels.subscribed);
    const options = useTSelector(state => state.options);

    return (
        <div className={`${options.isSlidingSidebarActive ? styles.active : ''} ${styles.body}`}>
            <div className={styles.content}>
            <SidebarGroup>     
                <SidebarCase image={homeSVG} text='Главная' to='/' />
                <SidebarCase image={recomendationsSVG} text='Рекомендации' to='/recomendations' />
                <SidebarCase image={likedSVG} text='Понравившиеся' to='/liked' />
                <SidebarCase image={historySVG} text='История' to='/history' />      
            </SidebarGroup>

            <Separator />


            <Subscribes />

            <Separator />

            <SidebarGroup>
                <legend>Категории:</legend>
                <SidebarCase image={sportSVG} text='Спорт' to='/sport' />
                <SidebarCase image={gamesSVG} text='Игры' to='/games' />
                <SidebarCase image={petsSVG} text='Питомцы' to='/pets' />
                <SidebarCase image={wildSVG} text='Окружающий мир' to='/wild' />
                <SidebarCase image={blogsSVG} text='Блоги' to='/blogs' />
                <SidebarCase image={broadcastsSVG} text='Прямые трансляции' to='/broadcasts' />
            </SidebarGroup>
            </div>
        </div>
    );
};

export default SlidingSidebar;
