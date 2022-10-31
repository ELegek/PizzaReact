import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

function Home({ searchValue }) {
	const [items, setItem] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	// Выбор категории
	const [categoryId, setCategoryId] = React.useState(0);
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

		fetch(
			`https://635a8f9a38725a1746ca0088.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
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
	}, [categoryId, sortType]);

	const pizzas = items
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			}

			return false;
		})
		.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
	const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
		</div>
	);
}

export default Home;
