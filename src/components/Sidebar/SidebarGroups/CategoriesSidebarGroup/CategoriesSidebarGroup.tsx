import * as React from 'react';
import SidebarCase from '../../SidebarCase/SidebarCase';
import SidebarGroup from '../SidebarGroup/SidebarGroup';

import sportSVG from '../../../../assets/images/UI/sport.svg';
import gamesSVG from '../../../../assets/images/UI/games.svg';
import petsSVG from '../../../../assets/images/UI/pets.svg';
import wildSVG from '../../../../assets/images/UI/wild.svg';
import blogsSVG from '../../../../assets/images/UI/blogs.svg';
import broadcastsSVG from '../../../../assets/images/UI/broadcasts.svg';

interface ICategoriesSidebarGroupProps {
}

const CategoriesSidebarGroup: React.FC<ICategoriesSidebarGroupProps> = (props) => {
  return (
    <SidebarGroup>
        <legend>Категории:</legend>
            <SidebarCase image={sportSVG} text='Спорт' to='/sport' />
            <SidebarCase image={gamesSVG} text='Игры' to='/games' />
            <SidebarCase image={petsSVG} text='Питомцы' to='/pets' />
            <SidebarCase image={wildSVG} text='Окружающий мир' to='/wild' />
            <SidebarCase image={blogsSVG} text='Блоги' to='/blogs' />
            <SidebarCase image={broadcastsSVG} text='Прямые трансляции' to='/broadcasts' />
    </SidebarGroup>
  );
};

export default CategoriesSidebarGroup;