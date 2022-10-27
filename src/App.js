import React from 'react';

// Компоненты
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
	const [item, setItem] = React.useState([]);

	React.useEffect(() => {
		// Получаем пиццы с сервера
		fetch('https://635a8f9a38725a1746ca0088.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				// Сохраняем массив пицц в стейт
				setItem(json);
			});
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{item.map((obj) => (
							<PizzaBlock key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
