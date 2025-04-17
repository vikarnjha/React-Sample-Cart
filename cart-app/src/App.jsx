// src/App.jsx
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="flex">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold p-4">🛍️ Products</h1>
        <ProductList />
      </div>
      <div className="w-1/3 bg-gray-100 p-4">
        <Cart />
      </div>
    </div>
  );
}
