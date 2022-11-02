import React from 'react';

// Стили
import styles from './Search.module.scss';
// Иконки
import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { SearchContext } from '../../App';

function Search() {
	const { searchValue, setSearchValue } = React.useContext(SearchContext);
	const inputRef = React.useRef();

	const onClickClear = () => {
		setSearchValue('');
		inputRef.current.focus();
	};

	return (
		<div className={styles.root}>
			<FaSearch className={styles.icon} />
			<input
				ref={inputRef}
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				className={styles.input}
				placeholder='Search...'
			/>
			{searchValue && <GrClose onClick={onClickClear} className={styles.clearIcon} />}
		</div>
	);
}

export default Search;
