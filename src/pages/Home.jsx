import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import Pagination from '../components/Pagination';

function Home({ searchValue }) {
	const [items, setItem] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	// Выбор категории
	const [categoryId, setCategoryId] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(1);
	// Выбор сортировки
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	React.useEffect(() => {
		setIsLoading(true);
		// Получаем пиццы с сервера
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sortType.sortProperty.replace('-', '');
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(
			`https://635a8f9a38725a1746ca0088.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
		)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				// Сохраняем массив пицц в стейт
				setItem(json);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
	const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</div>
	);
}

export default Home;
