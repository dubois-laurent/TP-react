import ProductList from "../components/ProductList";
import CartList from "../components/CartList";

function CataloguePage() {
  return (
    <>
      <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-neutral-200 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          🛍️ Notre Catalogue
        </h1>
        <div className="flex gap-6 max-w-7xl mx-auto">
          <div className="flex-1">
            <ProductList />
          </div>
          <div className="w-96 sticky top-8 h-fit">
            <CartList />
          </div>
        </div>
      </main>
    </>
  );
}

export default CataloguePage;
