import React from 'react';

function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const onClickCategories = (index) => {
		setActiveIndex(index);
	};
	return (
		<div className='categories'>
			<ul>
				{categories.map((item, index) => (
					<li
						key={index}
						onClick={() => onClickCategories(index)}
						className={activeIndex === index ? 'active' : ''}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
