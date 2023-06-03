import * as React from 'react';
import styles from './SlidingSidebar.module.css';
import Separator from '../../UI/Separator/Separator';
import { useTSelector } from './../../../hooks/redux';
import SubscribesNotFound from '../../UI/SubscribesNotFound/SubscribesNotFound';
import SubscribesSidebarGroup from '../SidebarGroups/SubscribesSidebarGroup/SubscribesSidebarGroup';
import MainSidebarGroup from '../SidebarGroups/MainSidebarGroup/MainSidebarGroup';
import CategoriesSidebarGroup from '../SidebarGroups/CategoriesSidebarGroup/CategoriesSidebarGroup';
import RoundButton from '../../UI/RoundButton/RoundButton';
import optionsSlice from '../../../store/reducers/optionsSlice';
import { useDispatch } from 'react-redux';

import burgerMenuSVG from '../../../assets/images/UI/burger-menu.svg';
import Logotype from '../../UI/Logotype/Logotype';

interface ISlidingSidebarProps {
}

const SlidingSidebar: React.FC<ISlidingSidebarProps> = (props) => {
    const subscribes = useTSelector(state => state.channels.subscribed);
    const dispatch = useDispatch();
    const options = useTSelector(state => state.options);

    const burgerMenuSlidingClickHandler = () => {
        dispatch(optionsSlice.actions.toggleSlidingSidebar());
    }

    return (
        <div className={`${options.isSlidingSidebarActive ? styles.active : ''} ${styles.body}`}>
            <div className={styles.content}>
                <div className={styles.flex}>
                    <RoundButton onClick={burgerMenuSlidingClickHandler}><img src={burgerMenuSVG} alt="burger-menu" /></RoundButton>
                    <Logotype />
                </div>

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
