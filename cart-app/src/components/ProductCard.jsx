// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
