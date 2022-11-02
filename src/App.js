import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Страницы
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

// Компоненты
import Header from './components/Header';

export const SearchContext = React.createContext();

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
