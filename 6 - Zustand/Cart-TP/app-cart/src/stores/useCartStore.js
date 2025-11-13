import { create } from "zustand";

const initialState = {
  products: [
    { id: 1, name: "Café", price: 3, quantity: 0 },
    { id: 2, name: "Thé", price: 2, quantity: 0 },
    { id: 3, name: "Chocolat", price: 4, quantity: 0 },
  ],
  cart: [],
  priceTotal: 0,
};

export const useCartStore = create((set, get) => ({
  ...initialState,
  addToCart: (productId) => {
    const { products, cart, priceTotal } = get();
    const product = products.find((p) => p.id === productId);
    const existingProduct = cart.find((p) => p.id === productId);
    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        if (p.id === productId) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      set({ cart: updatedCart, priceTotal: priceTotal + product.price });
      return;
    }
    const newProduct = { ...product, quantity: 1 };
    set({ cart: [...cart, newProduct], priceTotal: priceTotal + product.price,});
  },
  removeOneFromCart: (productId) => {
    const { cart, priceTotal } = get();
    const product = cart.find((p) => p.id === productId);
    if (product.quantity > 1) {
      const updatedCart = cart.map((p) => {
        if (p.id === productId) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      set({ cart: updatedCart, priceTotal: priceTotal - product.price });
    }
  },
  clearCart: () => {
    set({ cart: [], priceTotal: 0 });
  },
}));

export default useCartStore;
