import React from 'react';
import debounce from 'lodash.debounce';

// Стили
import styles from './Search.module.scss';
// Иконки
import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { SearchContext } from '../../App';

function Search() {
	const [value, setValue] = React.useState('');
	const { setSearchValue } = React.useContext(SearchContext);
	const inputRef = React.useRef();

	const onClickClear = () => {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce((str) => {
			setSearchValue(str);
		}, 500),
		[],
	);

	const onChangeInput = (event) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	return (
		<div className={styles.root}>
			<FaSearch className={styles.icon} />
			<input
				ref={inputRef}
				value={value}
				onChange={(event) => onChangeInput(event)}
				className={styles.input}
				placeholder='Search...'
			/>
			{value && <GrClose onClick={onClickClear} className={styles.clearIcon} />}
		</div>
	);
}

export default Search;
