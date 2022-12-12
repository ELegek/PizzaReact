import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';

// Стили
import styles from './Search.module.scss';
// Иконки
import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

function Search() {
	const dispatch = useDispatch();
	const [value, setValue] = React.useState('');
	const inputRef = React.useRef();

	const onClickClear = () => {
		dispatch(setSearchValue(''));
		setValue('');
		inputRef.current.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
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
