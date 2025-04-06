import { useEffect, useState } from "react";
import CategoryForm from "./components/CategoriesForm";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/ProductsForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import RemoveCategories from "./components/RemoveCategories";

function App() {
  const [categories, setCategories] = useState([]); // add, delete, set Categories
  const [products, setProducts] = useState([]); // add in product form, delete, show products
  // filter and finally show filtered products
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // to check localstorage.getItem
  const [isInitialized, setIsInitialized] = useState(false);

  // search handler and filter ---------
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  // sort handler and filter ----------
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  // filter based on what category it chooses
  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const fileterdSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  // now we use useEffect to handle changes in renders based on their dependencies
  useEffect(() => {
    //sortFilter
    //titleFilter, etc...
    let result = products;
    result = filterSearchTitle(result);
    result = fileterdSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, searchValue, sort, selectedCategory]);

  // To get products and categories from local storage and say we got it
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
    setIsInitialized(true);
  }, []);

  // to save products in local storage after we are sure we have already received the existing ones
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products, isInitialized]);

  // to save categories in local storage after we are sure we have already received the existing ones
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories, isInitialized]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar productsLength={products.length} />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Filter
          sort={sort}
          searchValue={searchValue}
          onSort={sortHandler}
          onSearchValue={searchHandler}
          selectedCategory={selectedCategory}
          onSelectedCategory={selectCategoryHandler}
          categories={categories}
        />
        <ProductList
          products={filteredProducts}
          setProducts={setProducts}
          categories={categories}
        />
        <CategoryForm setCategories={setCategories} />
        <RemoveCategories
          categories={categories}
          setCategories={setCategories}
        />
        <ProductsForm categories={categories} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;

// Roadmap note fore users
// 1. install vite-react : npm create vite@latest ./
// 2. install tailwindcss : use Tailwind website
// 3. install extension = tailwind css intellicence
// 4. get inside the code:
// --> what is our data flow? products + categories => we need form
// --> storage
// --> context API ??
// 5. Add Categories Form and handle it
// 6. Add Section to remove categories
// 7. Add Products Form having their categories id
// 8. Add Product List and show created products
// 9. Filter on products -> search value  + sort + category filter
// 10. Add data to storage and save and get it
