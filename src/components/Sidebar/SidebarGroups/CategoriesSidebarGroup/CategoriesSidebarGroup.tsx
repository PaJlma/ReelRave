import * as React from 'react';
import SidebarCase from '../../SidebarCase/SidebarCase';
import SidebarGroup from '../SidebarGroup/SidebarGroup';

import sportSVG from '../../../../assets/images/UI/sport.svg';
import gamesSVG from '../../../../assets/images/UI/games.svg';
import petsSVG from '../../../../assets/images/UI/pets.svg';
import wildSVG from '../../../../assets/images/UI/wild.svg';
import blogsSVG from '../../../../assets/images/UI/blogs.svg';
import broadcastsSVG from '../../../../assets/images/UI/broadcasts.svg';
import musicSVG from '../../../../assets/images/UI/music.svg';
import memesSVG from '../../../../assets/images/UI/smile-dizzy.svg';

interface ICategoriesSidebarGroupProps {
}

const CategoriesSidebarGroup: React.FC<ICategoriesSidebarGroupProps> = (props) => {
  return (
    <SidebarGroup>
        <legend>Категории:</legend>
            <SidebarCase image={gamesSVG} text='Игры' to='/categories/games' />
            <SidebarCase image={musicSVG} text='Музыка' to='/categories/music' />
            <SidebarCase image={memesSVG} text='Мемы' to='/categories/memes' />
            <SidebarCase image={broadcastsSVG} text='Прямые трансляции' to='/categories/broadcasts' />
            <SidebarCase image={sportSVG} text='Спорт' to='/categories/sport' />
            <SidebarCase image={petsSVG} text='Питомцы' to='/categories/pets' />
            <SidebarCase image={wildSVG} text='Окружающий мир' to='/categories/wild' />
            <SidebarCase image={blogsSVG} text='Блоги' to='/categories/blogs' />
    </SidebarGroup>
  );
};

export default CategoriesSidebarGroup;