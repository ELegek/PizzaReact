import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<circle cx='135' cy='136' r='125' />
		<rect x='3' y='276' rx='10' ry='10' width='280' height='28' />
		<rect x='4' y='318' rx='10' ry='10' width='280' height='88' />
		<rect x='3' y='425' rx='10' ry='10' width='95' height='30' />
		<rect x='131' y='417' rx='25' ry='25' width='152' height='45' />
	</ContentLoader>
);

export default Skeleton;
