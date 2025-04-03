import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoriesForm";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/ProductsForm";
import ProductList from "./components/ProductList";

// const products = [
//   {
//     id: 1,
//     title: "React.js",
//     category: "frontend",
//     createdAt: "2021-10-31T15:02:00.411z",
//   },
//   {
//     id: 2,
//     title: "JavaScript",
//     category: "frontend",
//     createdAt: "2022-03-22T11:32:50.556z",
//   },
//   {
//     id: 3,
//     title: "Node.js",
//     category: "backend",
//     // category: 2,
//     createdAt: "2019-08-14T18:14:20.889z",
//   },
// ];

// const categories = [
//   {
//     id: 1,
//     title: "frontend",
//     description: "The frontend of the application",
//     createdAt: "2022-03-22T11:32:50.556z",
//   },
//   {
//     id: 2,
//     title: "backend",
//     description: "The backend of the application",
//     createdAt: "2021-10-31T15:02:00.411z",
//   },
// ];

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <ProductList products={products} setProducts={setProducts} categories={categories} />
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
// 