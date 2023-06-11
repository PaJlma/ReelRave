import * as React from 'react';
import styles from './TextArea.module.scss';

import arrows from '../../../assets/images/UI/double-arrows.svg';

interface ITextAreaProps {
    width: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: () => void;
    value?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ width, onChange, value, onClick, ...props }) => {
    const textareaRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const onKeyDownHandler = () => {
        setTimeout(() => {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }, 1);
    }

    return (
        <div style={{width: width}} className={styles.body}>
            <textarea ref={textareaRef} onKeyDown={onKeyDownHandler} onChange={onChange} value={value} />
            <button onClick={onClick}><img src={arrows} alt="arrow" /></button>
        </div>
    );
};

export default TextArea;
