import React, { useState } from "react";

function CategoryForm() {
  const [isShown, setIsShown] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: ""
  });
  const [categories, setCategories] = useState([]);

  const changeHandler = ({target}) => {
    const {name, value} = target;
    setCategoryFormData({...categoryFormData, [name] : value})
  };

  const addNewCategoryHandler = (e) =>{
    e.preventDefault();
    setCategories([...categories, {...categoryFormData, createdAt: new Date().toISOString()}])

  }

  return (
    <>
      <button
        id="toggle-add-category"
        onClick={() => setIsShown(!isShown)}
        className="text-slate-600 text-lg my-4 font-medium cursor-pointer"
      >
        Add New Category
      </button>
      {isShown && (
        <div className="mb-6" id="category-wrapper">
          <h2 className="text-xl text-slate-300 font-bold mb-2">
            Add New Category
          </h2>
          <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div className="text-left">
              <label
                htmlFor="title"
                className="block mb-1 text-slate-400"
              >
                Title
              </label>
              <input
                value={categoryFormData.title}
                onChange={changeHandler}
                type="text"
                name="title"
                id="title"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto p-2 shadow"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="description"
                className="block mb-1 text-slate-400"
              >
                Description
              </label>
              <textarea
                value={categoryFormData.description}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 h-26 w-full md:w-full p-2"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-space-between">
              <button
                onClick={() => setIsShown(false)}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-1/2 mx-1 p-2 cursor-pointer transition hover:translate-y-0.5"
              >
                Cancel
              </button>
              <button
                onClick={addNewCategoryHandler}
                type="submit"
                className="bg-slate-400 text-white rounded-xl border-0 mx-1 w-full md:w-1/2 p-2 cursor-pointer transition hover:translate-y-0.5"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CategoryForm;
