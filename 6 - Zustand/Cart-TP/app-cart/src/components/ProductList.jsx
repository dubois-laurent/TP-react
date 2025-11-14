
import { useCartStore } from "../stores/useCartStore";
import { ProductCard } from "./ProductCard";

function ProductList() {

  const { products } = useCartStore((s) => s);

  return (
    <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">📦 Produits disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((value) => <ProductCard key={value.id} value={value} /> )}
      </div>
    </div>
  );
}

export default ProductList;
