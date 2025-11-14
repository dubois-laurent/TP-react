import { useCartStore } from "../stores/useCartStore";

export function ProductCard(props) {
    const { addToCart } = useCartStore((s) => s);
	return (
		<div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-xl">
			<div className="mb-3">
				<h3 className="text-lg font-semibold text-white mb-1">{props.value.name}</h3>
				<p className="text-2xl font-bold text-green-400">{props.value.price}€</p>
			</div>
            <button 
				onClick={() => addToCart(props.value.id)}
				className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all shadow-lg"
			>
				➕ Ajouter au panier
			</button>
		</div>
	);
}