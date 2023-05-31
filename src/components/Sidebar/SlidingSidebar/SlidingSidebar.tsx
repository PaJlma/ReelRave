import * as React from 'react';
import styles from './SlidingSidebar.module.css';
import Separator from '../../UI/Separator/Separator';
import { useTSelector } from './../../../hooks/redux';
import SubscribesNotFound from '../../UI/SubscribesNotFound/SubscribesNotFound';
import SubscribesSidebarGroup from '../SidebarGroups/SubscribesSidebarGroup/SubscribesSidebarGroup';
import MainSidebarGroup from '../SidebarGroups/MainSidebarGroup/MainSidebarGroup';
import CategoriesSidebarGroup from '../SidebarGroups/CategoriesSidebarGroup/CategoriesSidebarGroup';

interface ISlidingSidebarProps {
}

const SlidingSidebar: React.FC<ISlidingSidebarProps> = (props) => {
    const subscribes = useTSelector(state => state.channels.subscribed);
    const options = useTSelector(state => state.options);

    return (
        <div className={`${options.isSlidingSidebarActive ? styles.active : ''} ${styles.body}`}>
            <div className={styles.content}>
            <MainSidebarGroup />

            <Separator />


            {
            subscribes.length === 0
            ?
                <SubscribesNotFound />
            :
                <SubscribesSidebarGroup />
            }

            <Separator />

            <CategoriesSidebarGroup />
            </div>
        </div>
    );
};

export default SlidingSidebar;
