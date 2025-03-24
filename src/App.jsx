import "./App.css";
import CategoryForm from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

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
  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm />

        <Products />
      </div>
    </div>
  );
}

export default App;

// 1. install vite-react
// 2. install tailwindcss
// 3. install extension = tailwind css intellicence
// 4. get inside the code:
// --> what is our data flow? products + categories => we need form
// --> storage
// --> context API ?
