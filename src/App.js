import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { useLocalStorage } from './hooks/useLocalStorage'



function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('saved', [])

	const addItem = item => {
		// add the given item to the cart
		setCart([ ...cart, item ])
	};

	const removeItem = id => {
		setCart(cart.filter( (eachItem) => eachItem.id !== id ))
	}

	return (
		// The value prop can be ANYTHING whatever you want to pass down.
		// The value prop must be in object format (deconstructor)
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
