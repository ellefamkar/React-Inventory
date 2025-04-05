import { useEffect, useState } from "react";
import CategoryForm from "./components/CategoriesForm";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/ProductsForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

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

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const fileterdSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  useEffect(() => {
    //sortFilter
    //titleFilter, etc...
    let result = products;
    result = filterSearchTitle(result);
    result = fileterdSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar productsLength={products.length} />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Filter
          sort={sort}
          searchValue={searchValue}
          onSort={sortHandler}
          onSearch={searchHandler}
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
        <ProductsForm categories={categories} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;

// Roadmap note fore users
// 1. install vite-react
// 2. install tailwindcss
// 3. install extension = tailwind css intellicence
// 4. get inside the code:
// --> what is our data flow? products + categories => we need form
// --> storage
// --> context API ?
// 5. Add Categories Form and handle it
// 6. Add Products Form using categories id
// 7. Add Product List and show created products
// 8. Filter on products
