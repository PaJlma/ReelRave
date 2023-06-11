import * as React from 'react';
import styles from './ShareButton.module.scss';

import shareSVG from '../../../assets/images/UI/share.svg';

interface IShareButtonProps {
}

const ShareButton: React.FC<IShareButtonProps> = (props) => {
    const shareClickHandler = () => {
        navigator.clipboard.writeText(window.location.href);
    }
    
    return (
        <div onClick={shareClickHandler} className={styles.body}>
            <img src={shareSVG} alt="share" />
            <p>Поделиться</p>
        </div>
    );
};

export default ShareButton;
