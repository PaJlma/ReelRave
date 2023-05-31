import * as React from 'react';
import { useTSelector } from '../../../../hooks/redux';
import SidebarChannelCase from '../../SidebarChannelCase/SidebarChannelCase';
import SidebarGroup from '../SidebarGroup/SidebarGroup';
import sliceStringTo from '../../../../scripts/sliceStringTo';

interface ISubscribesSidebarGroupProps {
}

const SubscribesSidebarGroup: React.FC<ISubscribesSidebarGroupProps> = (props) => {
    const subscribes = useTSelector(state => state.channels.subscribed);


    return (
        <SidebarGroup>   
            <legend>Ваши подписки:</legend>
            {
                subscribes.map(channel => <SidebarChannelCase
                    key={ channel.privateName }
                    avatar={ channel.avatar }
                    text={ sliceStringTo(channel.publicName, 22) }
                    isConfirmed={ channel.isConfirmed }
                    to={ `/channel/${channel.privateName}` }
                />
                )
            }     
        </SidebarGroup>
    );
};

export default SubscribesSidebarGroup;
