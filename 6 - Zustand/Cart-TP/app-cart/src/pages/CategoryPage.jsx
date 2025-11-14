import Category from "../components/Category.jsx";

function CategoryPage() {
  return (
    <>
      <main className="min-h-screen w-full bg-neutral-900 text-neutral-200 flex items-start justify-center p-10">
        <div className="flex gap-3 flex-wrap">
            <Category />
        </div>
      </main>
    </>
  );
}

export default CategoryPage;
