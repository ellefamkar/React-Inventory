function Filter({ sort, onSort, searchValue, onSearchValue, categories,
  selectedCategory,
  onSelectedCategory,
}) {

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* search bar  */}
        <input
          value={searchValue}
          onChange={onSearchValue}
          type="text"
          name="search-input"
          id="search-input"
          placeholder=" 🔎 search your product ..."
          className="flex-1 bg-transparent rounded-xl px-2 py-1 border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-1/2 mb-4">
          {/* <label htmlFor="sort-products" className="text-slate-500 text-lg mr-4">
            Sort
          </label> */}
          {/* sort */}
          <select
            value={sort}
            onChange={onSort}
            name="sort-products"
            id="sort-products"
            className="cursor-pointer bg-transparent flex-1 px-2 py-1 border border-slate-500 text-slate-400 rounded-xl" >
            <option className="bg-slate-500 text-slate-300 px-3" value="">
              Select a category
            </option>
            <option className="bg-slate-500 text-slate-300  px-3" value="latest">
              Latest
            </option>
            <option className="bg-slate-500 text-slate-300  px-3" value="earliest">
              Earliest
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between w-full md:w-1/2 mb-4 md:ml-4">
          {/* <label htmlFor="sort-products" className="text-slate-500 text-lg mr-4">
            Category
          </label> */}
          {/* Category  */}
          <select
            value={selectedCategory}
            onChange={onSelectedCategory}
            name="sort-products"
            id="sort-products"
            className="cursor-pointer flex-1 bg-transparent border border-slate-500 text-slate-400 px-2 py-1 rounded-xl"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              All Categories
            </option>
            {categories.map((cat) => (
              <option
                className="bg-slate-500 text-slate-300"
                key={cat.id}
                value={cat.id}
              >
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
