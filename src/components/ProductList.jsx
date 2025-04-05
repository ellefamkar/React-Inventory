import React from "react";

function ProductList({ products, categories, setProducts }) {
  const findCategoryTitle = (categoryId) => {
    if (categories) {
      const foundCategory = categories.find((c) => c.id === parseInt(categoryId));
      return foundCategory ? foundCategory.title : "Unknown Category";
    }
    return "Unknown Category";
  };

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((p) => p.id !== parseInt(id));
    setProducts(filteredProducts);
  };

  return (
    <>
      <h2 className="mt-8 mb-4 text-xl text-slate-300 font-bold">
        Product List
      </h2>
      {products.length > 0 ? (
        <div className="overflow-x-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 w-full border border-slate-500 rounded-xl  p-2 min-w-[400px]"
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString("en-EN")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                  {product.categoryId && findCategoryTitle(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="cursor-pointer border px-2 py-0.5 rounded-xl border-red-400 text-red-400 delete-product"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-400">No products were addedd. Add some products to your basket.</p>
      )}
    </>
  );
}

export default ProductList;
