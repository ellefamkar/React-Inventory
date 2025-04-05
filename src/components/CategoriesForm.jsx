import React, { useState } from "react";

function CategoryForm({ setCategories }) {
  // To show Add Cat btn or hide it
  const [isShown, setIsShown] = useState(false);

  // to handle form data
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  // to handle onChange function for all data in the form using one handler
  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  // Add new Category and set categories
  // since we lifted up categories we use prevState here
  const addNewCategoryHandler = (e) => {

    e.preventDefault();

    setCategories((prevState) => [
      ...prevState,
      {
        ...categoryFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <>
      <button
        id="toggle-add-category"
        onClick={() => setIsShown(!isShown)}
        className={`*
          text-slate-400 text-lg mb-2 mt-9 font-medium cursor-pointer flex items-center
          ${isShown && "hidden"}
          `}
      >
        <span className="bg-slate-800 font-bold flex items-center justify-center text-center align-middle border-1 text-slate-400 border-slate-400 w-5 h-5 rounded-full pb-1 mr-2">
          +
        </span>
        Add New Category
      </button>
      {isShown && (
        <div className="my-6" id="category-wrapper">
          <h2 className="text-xl text-slate-300 font-bold mb-3">
            Add New Category
          </h2>
          <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div className="text-left">
              <label htmlFor="title" className="block mb-1 text-slate-400">
                Title
              </label>
              <input
                value={categoryFormData.title}
                onChange={changeHandler}
                type="text"
                name="title"
                id="title"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full p-2 shadow focus:outline-0 focus:border-slate-400 focus:shadow"
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
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 h-26 w-full p-2 focus:outline-0 focus:border-slate-400 focus:shadow"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-x-4">
              <button
                onClick={() => setIsShown(false)}
                className="bg-transparent my-1 rounded-xl border border-slate-500 text-slate-400 w-full sm:w-1/2 mx-1 p-2 cursor-pointer transition hover:translate-y-0.5"
              >
                Close
              </button>
              <button
                onClick={addNewCategoryHandler}
                type="submit"
                className="bg-slate-400 my-1 text-white rounded-xl border-0 mx-1 w-full sm:w-1/2 p-2 cursor-pointer transition hover:translate-y-0.5"
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
