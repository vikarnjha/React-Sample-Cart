// src/components/Cart.jsx
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-1">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="mt-2 font-semibold">Total: ₹{total.toFixed(2)}</p>
          <button
            onClick={clearCart}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
