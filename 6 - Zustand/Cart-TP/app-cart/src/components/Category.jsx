import { useCategoryStore } from "../stores/useCategoryStore";
import { useParams } from "@tanstack/react-router"

export default function Category() {
  const { ShowPerCategory } = useCategoryStore((s) => s);

  const params = useParams({ from: "/category/$name" });

  console.log("Category name param:", params.name);

  const filteredProducts = ShowPerCategory(params.name)

  return (
    <>
        <div className="flex gap-3 flex-wrap w-full flex-col items-center">
          {filteredProducts.map((value, index) => (
            <li key={index}>{value.name}</li>
          ))}
        </div>
    </>
  );
}
