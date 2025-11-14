import { useCartStore } from "../stores/useCartStore";

export function CartCard(props) {
    const { addToCart, removeOneFromCart } = useCartStore((s) => s);
    return (
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h4 className="font-semibold text-white">{props.value.name}</h4>
                    <p className="text-sm text-white/60">{props.value.price}€ × {props.value.quantity}</p>
                </div>
                <p className="text-lg font-bold text-green-400">
                    {(props.value.price * props.value.quantity).toFixed(2)}€
                </p>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => removeOneFromCart(props.value.id)}
                    className="flex-1 bg-red-500/80 hover:bg-red-500 text-white font-semibold py-1 rounded transition-all"
                >
                    -
                </button>
                <span className="flex items-center justify-center px-3 bg-white/10 rounded text-white font-bold">
                    {props.value.quantity}
                </span>
                <button 
                    onClick={() => addToCart(props.value.id)}
                    className="flex-1 bg-green-500/80 hover:bg-green-500 text-white font-semibold py-1 rounded transition-all"
                >
                    +
                </button>
            </div>
        </div>
    );
}