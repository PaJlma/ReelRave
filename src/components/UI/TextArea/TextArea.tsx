import * as React from 'react';
import styles from './TextArea.module.css';

import arrows from '../../../assets/images/UI/double-arrows.svg';

interface ITextAreaProps {
    width: string;
    onChange?: () => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ width, onChange, ...props }) => {
    const textareaRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const onKeyDownHandler = () => {
        setTimeout(() => {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }, 1);
    }

    return (
        <div style={{width: width}} className={styles.body}>
            <textarea ref={textareaRef} onKeyDown={onKeyDownHandler} onChange={onChange} />
            <button><img src={arrows} alt="arrow" /></button>
        </div>
    );
};

export default TextArea;
