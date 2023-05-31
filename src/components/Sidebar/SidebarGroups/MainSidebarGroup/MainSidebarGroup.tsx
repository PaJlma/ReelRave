import * as React from 'react';
import SidebarCase from '../../SidebarCase/SidebarCase';
import SidebarGroup from '../SidebarGroup/SidebarGroup';

import homeSVG from '../../../../assets/images/UI/home.svg';
import recomendationsSVG from '../../../../assets/images/UI/recomendations.svg';
import likedSVG from '../../../../assets/images/UI/likes.svg';
import historySVG from '../../../../assets/images/UI/history.svg';

interface IMainSidebarGroupProps {
}

const MainSidebarGroup: React.FC<IMainSidebarGroupProps> = (props) => {
  return (
    <SidebarGroup>
        <SidebarCase image={homeSVG} text='Главная' to='/' />
        <SidebarCase image={recomendationsSVG} text='Рекомендации' to='/recomendations' />
        <SidebarCase image={likedSVG} text='Понравившиеся' to='/liked' />
        <SidebarCase image={historySVG} text='История' to='/history' />
    </SidebarGroup>
  );
};

export default MainSidebarGroup;
