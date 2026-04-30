'use client';
import { useState } from 'react';

export default function AddToCart({ product }: { product: any }) {
	const [quantity, setQuantity] = useState(1);

	const handleAdd = () => {
		const saved = localStorage.getItem('cart');
		const cart = saved ? JSON.parse(saved) : [];
		const index = cart.findIndex((i: any) => i.url === product.url);

		if (index > -1) {
			cart[index].quantity += quantity;
		} else {
			cart.push({ ...product, quantity: quantity });
		}

		localStorage.setItem('cart', JSON.stringify(cart));
		alert(`Added ${quantity} item(s) to cart!`);
	};

	return (
		<div className="flex gap-4 items-center">
			<input 
				type="number" 
				min="1" 
				value={quantity} 
				onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
				className="w-16 p-2 border rounded"
			/>
			<button onClick={handleAdd} className="buttonClick">
				Add to Cart
			</button>
		</div>
	);
}