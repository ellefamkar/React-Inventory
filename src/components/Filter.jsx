function Filter({
  sort,
  searchValue,
  onSort,
  onSearch,
  categories,
  selectedCategory,
  onSelectedCategory,
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          value={searchValue}
          onChange={onSearch}
          type="text"
          name="search-input"
          id="search-input"
          placeholder="search..."
          className="bg-transparent rounded-xl px-2 py-1 border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          value={sort}
          onChange={onSort}
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            Select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            Latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            Earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={onSelectedCategory}
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
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
    </>
  );
}

export default Filter;
