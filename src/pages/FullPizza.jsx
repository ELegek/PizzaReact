import React from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
	const params = useParams();
	return (
		<div className='container'>
			<img src='' alt='' />
			<h2>{params.id}</h2>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	);
};

export default FullPizza;
