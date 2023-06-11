import * as React from 'react';
import styles from './Search.module.scss';

import searchSVG from '../../../assets/images/UI/search.svg';

interface ISearchProps {
    onChange?: () => void;
    onClick?: () => void;
    placeholder?: string;
}

const Search: React.FC<ISearchProps> = ({ onChange, onClick, placeholder, ...props }) => {
  return (
    <div className={styles.body}>
        <input onChange={onChange} placeholder={placeholder} type="text" />
        <button>
            <img src={searchSVG} alt="search" />
        </button>
    </div>
  );
};

export default Search;
