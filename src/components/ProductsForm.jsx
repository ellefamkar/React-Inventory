import React, { useState } from "react";

function ProductsForm({ categories, setProducts }) {
  const [productData, setProductdata] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target
    setProductdata({...productData, [name]: value});
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productData,
      createdAt : new Date().toISOString(),
      id: new Date().getTime(),
    }
    setProducts((prevState) => [...prevState, newProduct]);
    setProductdata({title: "", quantity: 0, categoryId: ""})

  }

  return (
    <div className="my-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div className="text-left">
          <label htmlFor="title" className="block mb-1 text-slate-400">
            Title
          </label>
          <input
            value={productData.title}
            onChange={changeHandler}
            type="text"
            name="title"
            id="title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full p-2 shadow"
          />
        </div>
        <div className="text-left">
          <label htmlFor="quantity" className="block mb-1 text-slate-400">
            Quantity
          </label>
          <input
            value={productData.quantity }
            onChange={changeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full p-2"
            type="number"
            name="quantity"
            id="quantity"
          />
        </div>
        <div className="text-left">
          <label htmlFor="categoryId" className="block mb-1 text-slate-400">
            Category
          </label>
          <select
            value={productData.categoryId}
            onChange={changeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-full p-2"
            name="categoryId"
            id="categoryId"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              Select a category
            </option>
            {categories.map((item) => {
              return (
                <option
                  key={item.id}
                  className="bg-slate-500 text-slate-300"
                  value={item.id}
                >
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProductHandler}
            type="submit"
            className="bg-slate-400 text-white rounded-xl border-0 w-full md:w-1/2 p-2 cursor-pointer transition hover:translate-y-0.5"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductsForm;
