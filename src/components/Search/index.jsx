import React from 'react';

// Стили
import styles from './Search.module.scss';
// Иконки
import { FaSearch } from 'react-icons/fa';

function Search() {
	return (
		<div className={styles.root}>
			<FaSearch className={styles.icon} />
			<input className={styles.input} placeholder='Search...' />
		</div>
	);
}

export default Search;
