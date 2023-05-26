import * as React from 'react';
import SidebarCase from '../SidebarCase/SidebarCase';
import styles from './DefaultSidebar.module.css';
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

import sleepyCatPNG from '../../../assets/images/UI/sleepy-cat.png';
import SidebarChannelCase from '../SidebarChannelCase/SidebarChannelCase';
import { useTSelector } from './../../../hooks/redux';

interface IDefaultSidebarProps {
}

const DefaultSidebar: React.FC<IDefaultSidebarProps> = (props) => {
  const subscribes = useTSelector(state => state.channels.subscribed);

  return (
    <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.group}>
            <SidebarCase image={homeSVG} text='Главная' to='/' />
            <SidebarCase image={recomendationsSVG} text='Рекомендации' to='/recomendations' />
            <SidebarCase image={likedSVG} text='Понравившиеся' to='/liked' />
            <SidebarCase image={historySVG} text='История' to='/history' />
          </div>

          <Separator />

          <div className={styles.group}>
            {
              subscribes.length === 0
              ?
                <div className={styles.subscribesNotFound}>
                  <img src={sleepyCatPNG} alt="sleepy ass" title='ZzZzZz...' />
                  <p>Вы ни на кого не подписаны!</p>
                </div>
              :
                subscribes.map(channel => <SidebarChannelCase 
                    avatar={channel.avatar} 
                    text={
                      channel.publicName.length < 17 
                      ?
                      channel.publicName
                      :
                      channel.publicName.slice(0, 17)+'...'
                    } 
                    to={`/@${channel.privateName}`}
                  />
                )
            }
            
          </div>

          <Separator />

          <div className={styles.group}>
            <legend>Категории:</legend>
            <SidebarCase image={sportSVG} text='Спорт' to='/sport' />
            <SidebarCase image={gamesSVG} text='Игры' to='/games' />
            <SidebarCase image={petsSVG} text='Питомцы' to='/pets' />
            <SidebarCase image={wildSVG} text='Окружающий мир' to='/wild' />
            <SidebarCase image={blogsSVG} text='Блоги' to='/blogs' />
            <SidebarCase image={broadcastsSVG} text='Прямые трансляции' to='/broadcasts' />
          </div>
        </div>
    </div>
  );
};

export default DefaultSidebar;
