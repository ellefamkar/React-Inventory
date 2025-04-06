import React, { useState } from "react";

function RemoveCategories({ categories, setCategories }) {
  // To show or hide the remove category box
  const [isShown, setIsShown] = useState(true);

  // To delete a category checking by its id
  const deleteCategory = (id) => {
    const filteredCategories = categories.filter((c) => c.id !== parseInt(id));
    setCategories(filteredCategories);
  };

  return (
    <>
      <button
        id="toggle-add-category"
        onClick={() => setIsShown(!isShown)}
        className={`*
              text-slate-400 text-lg mb-8 mt-6 font-medium cursor-pointer flex items-center
              ${isShown && "hidden"} `}>
        <span className="bg-slate-800 font-bold flex items-center justify-center text-center align-middle border-1 text-slate-400 border-slate-400 w-5 h-5 rounded-full pb-1 mr-2">
          -
        </span>
        Remove Category
      </button>
      {isShown && (
        <div className="my-7" id="category-wrapper">
          <h2 className="text-xl text-slate-300 font-bold mb-4">
            Remove Category
          </h2>
          <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div>
              {categories.length === 0 ? (
                <p className="text-slate-400">
                  No categories available. Add a category.
                </p>
              ) : (
                categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex flex-col mb-3 w-full border border-slate-500 rounded-xl p-3 min-w-full" >
                    <div className="flex justify-between">
                      <span className="py-1 px-3 rounded-lg bg-slate-500 text-slate-300">
                        {category.title}
                      </span>
                      <div>
                        <span className="text-slate-400">
                          {new Date(category.createdAt).toLocaleDateString("en-EN")}
                        </span>
                        <button
                          onClick={() => deleteCategory(category.id)}
                          className="cursor-pointer border ml-2 px-2 py-0.5 rounded-xl border-red-400 text-red-400 delete-product" >
                          delete
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 mb-2 text-slate-300">
                      {category.description}
                    </p>
                  </div>
                ))
              )}
            </div>
            <button
              onClick={() => setIsShown(false)}
              className="bg-transparent my-1 rounded-xl border border-slate-500 text-slate-400 w-full sm:w-1/2 mx-1 p-2 cursor-pointer transition hover:translate-y-0.5">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RemoveCategories;
