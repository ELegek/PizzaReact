import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux//slices/filterSlice.js';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

function Home() {
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector((state) => state.filter);

	const { searchValue } = React.useContext(SearchContext);
	const [items, setItem] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [currentPage, setCurrentPage] = React.useState(1);
	// Выбор сортировки

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	React.useEffect(() => {
		setIsLoading(true);
		// Получаем пиццы с сервера
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const search = searchValue ? `&search=${searchValue}` : '';

		axios
			.get(
				`https://635a8f9a38725a1746ca0088.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
			)
			.then((res) => {
				setItem(res.data);
				setIsLoading(false);
			});

		window.scrollTo(0, 0);
	}, [categoryId, sort, searchValue, currentPage]);

	const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</div>
	);
}

export default Home;
