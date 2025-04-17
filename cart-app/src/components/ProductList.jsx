// src/components/ProductList.jsx
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Banana', price: 90 },
  { id: 3, name: 'Orange', price: 80 },
  { id: 4, name: 'Grapes', price: 70 },
  { id: 5, name: 'Mango', price: 60 },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
