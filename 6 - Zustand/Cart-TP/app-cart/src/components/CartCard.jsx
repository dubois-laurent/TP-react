import { useCartStore } from "../stores/useCartStore";

export function CartCard(props) {
    const { addToCart, removeOneFromCart, clearCart } = useCartStore((s) => s);
    return (
        <div className="relative">
            <div
                className={`w-50 h-50 rounded-md flex items-center justify-center border border-gray-800 bg-gray-900 text-lg font-mono`}
            >
                {props.value.name} - {props.value.price}€
                {props.value.quantity && <span> (Qty: {props.value.quantity})</span>}
            </div>
            <button onClick={() => addToCart(props.value.id)}>+1</button>
            <button onClick={() => removeOneFromCart(props.value.id)}>-1</button>
            <button onClick={() => clearCart(props.value.id)}>Vider le Cart</button>
        </div>
    );
}