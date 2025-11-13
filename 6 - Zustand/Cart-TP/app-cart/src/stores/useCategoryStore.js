import { create } from "zustand";

const initialState = {
    products: [
  {
    id: 1,
    name: "Café Arabica",
    price: 3.5,
    category: "boissons",
    description: "Un café 100% Arabica torréfié lentement pour un goût doux et équilibré.",
    rating: 4.6,
    stock: 24,
    origin: "Colombie"
  },
  {
    id: 2,
    name: "Thé Vert Matcha",
    price: 2.8,
    category: "boissons",
    description: "Thé vert matcha premium avec une légère amertume et des notes végétales.",
    rating: 4.2,
    stock: 15,
    origin: "Japon"
  },
  {
    id: 3,
    name: "Chocolat Noir 80%",
    price: 4.2,
    category: "gâteaux",
    description: "Tablette de chocolat noir intense (80%) à la texture fondante.",
    rating: 4.7,
    stock: 40,
    origin: "Belgique"
  },
  {
    id: 4,
    name: "Croissant Beurre AOP",
    price: 1.9,
    category: "pâtisseries",
    description: "Croissant pur beurre AOP croustillant et doré, fait chaque matin.",
    rating: 4.5,
    stock: 32,
    origin: "France"
  },
  {
    id: 5,
    name: "Cookie Double Chocolat",
    price: 2.2,
    category: "pâtisseries",
    description: "Cookie moelleux au chocolat noir et lait, pépites généreuses.",
    rating: 4.8,
    stock: 18,
    origin: "États-Unis"
  },
  {
    id: 6,
    name: "Jus d'Orange Pressé",
    price: 3.0,
    category: "boissons",
    description: "Jus d'orange pressé à froid, riche en vitamines, sans sucre ajouté.",
    rating: 4.4,
    stock: 12,
    origin: "Espagne"
  }
],
};

export const useCategoryStore = create((set, get) => ({
    ...initialState,
    ShowPerCategory: (categoryName) => {
        const { products } = get();
        return products.filter((p) => p.category === categoryName);
    }
}));

export default useCategoryStore;