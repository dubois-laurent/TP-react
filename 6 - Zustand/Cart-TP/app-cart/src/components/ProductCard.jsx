import { useCartStore } from "../stores/useCartStore";

export function ProductCard(props) {
    const { addToCart } = useCartStore((s) => s);
	return (
		<div className="relative">
			<div
				className={`w-50 h-50 rounded-md flex items-center justify-center border border-gray-800 bg-gray-900 text-lg font-mono`}
			>
				{props.value.name} - {props.value.price}€
			</div>
            <button onClick={() => addToCart(props.value.id)}>Add to Cart</button>
		</div>
	);
}