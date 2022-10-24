import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
				<SortPopup items={['популярности', 'цене', 'алфавиту']} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				<PizzaBlock title='Мексиканская' price='500' />
			</div>
		</div>
	);
}

export default Home;
