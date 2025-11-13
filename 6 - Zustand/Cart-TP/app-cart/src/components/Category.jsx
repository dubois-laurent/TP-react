import { useCategoryStore } from "../stores/useCategoryStore";
import { useParams } from "@tanstack/react-router"

export default function CategoryPage() {
  const { ShowPerCategory, products } = useCategoryStore((s) => s);

  const params = useParams({ from: "/category/$name" });

  console.log("Category name param:", params.name);

  const filteredProducts = ShowPerCategory(params.name)


  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-100",
    outline: "border border-neutral-700 text-neutral-100 hover:bg-neutral-800",
    ghost: "text-neutral-300 hover:bg-neutral-800",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };

  return (
    <>
      <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start flex-col p-10">
        <h1 className="p-2 text-2xl font-bold">
          Vos produits appartenant à cette catégorie : {params.name}
        </h1>
        <div className="flex gap-3 flex-wrap w-full flex-col items-center">
          {filteredProducts.map((value, index) => (
            <li key={index}>{value.name}</li>
          ))}
        </div>
      </main>
    </>
  );
}
