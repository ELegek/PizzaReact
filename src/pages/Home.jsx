import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

function Home() {
	const [items, setItem] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		// Получаем пиццы с сервера
		fetch('https://635a8f9a38725a1746ca0088.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				// Сохраняем массив пицц в стейт
				setItem(json);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
}

export default Home;
