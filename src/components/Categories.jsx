import React from 'react';

function Categories({ items }) {
	const [activeItem, setActiveItem] = React.useState(1);
	console.log(activeItem);

	const onSelectItem = (index) => {
		setActiveItem(index);
	};
	return (
		<div className='categories'>
			<ul>
				<li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
					Все
				</li>
				{items.map((name, index) => (
					<li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
