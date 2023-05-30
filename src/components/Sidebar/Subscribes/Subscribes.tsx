import * as React from 'react';
import { useTSelector } from '../../../hooks/redux';
import SidebarChannelCase from '../SidebarChannelCase/SidebarChannelCase';
import SidebarGroup from '../SidebarGroup/SidebarGroup';

interface ISubscribesProps {
}

const Subscribes: React.FunctionComponent<ISubscribesProps> = (props) => {
    const subscribes = useTSelector(state => state.channels.subscribed);


    return (
        <SidebarGroup>   
            <legend>Ваши подписки:</legend>
            {
                subscribes.map(channel => <SidebarChannelCase
                    key={channel.privateName}
                    avatar={channel.avatar}
                    text={
                        channel.publicName.length < 22
                        ?
                        channel.publicName
                        :
                        channel.publicName.slice(0, 22)+'...'
                    }
                    isConfirmed={channel.isConfirmed}
                    to={`/channel/${channel.privateName}`}
                />
                )
            }     
        </SidebarGroup>
    );
};

export default Subscribes;
