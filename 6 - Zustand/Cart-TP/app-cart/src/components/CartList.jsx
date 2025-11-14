
import { useCartStore } from "../stores/useCartStore";
import { CartCard } from "./CartCard";

function CartList() {

  const { cart, priceTotal, clearCart } = useCartStore((s) => s);

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
        🛒 Mon Panier
        <span className="text-sm font-normal text-white/60">({cart.length})</span>
      </h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg mb-2">🛍️</p>
          <p className="text-white/60">Votre panier est vide</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
            {cart.map((value) => <CartCard key={value.id} value={value} /> )}
          </div>
          
          <div className="border-t border-white/20 pt-4 space-y-3">
            <div className="flex justify-between items-center text-lg">
              <span className="text-white/80">Total articles:</span>
              <span className="font-bold text-white">{cart.length}</span>
            </div>
            <div className="flex justify-between items-center text-xl">
              <span className="text-white/80">Total:</span>
              <span className="font-bold text-green-400">{priceTotal.toFixed(2)}€</span>
            </div>
            <button 
              onClick={clearCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              🗑️ Vider le panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;
