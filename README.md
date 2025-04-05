# Inventory App by Elle Famkar (developed with React)

## Welcome to the Note Apps project! 👋

important point : remember to install node package and then command -> npm run dev so as to start the project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Thank you for exploring this React project! The goal was to gain experience with React and hooks, and I enjoyed using pure CSS for styling. I hope you enjoy it and welcome your feedback!

Remember that "Every day is a learning day", so let's checkout the requirements to start such project

### The challenge

In his project you should be able to:

- Have a good react mindset
- good state management
- lift states up
- work with children props
- View the optimal layout for the component depending on differeent device screen size
- Use react hooks

### Screenshot

![](src/assets/images/Note-app-desktop.png)
![](src/assets/images/Note-app-mobile.png)

### Links

- Live Site URL: [Notes App](https://notes-app-elle.netlify.app/)

## My process

### Where to find resources

We know what we need first, yes! you are right, the design file. So let's checkout this repository to find even the smallest details about the style requirements of this project such as `font-size`, `padding` and `margin` as well as finding all the required assets in the `/images` folder. The assets are already optimized. All the compontents structures are available here.

### Built with

- React
- React hooks
- vite
- Tailwind CSS
- Mobile-first workflow

You can use any tools you like to help you complete the project. So if you got something you'd like to practice, feel free to give it a try.

### What I learned

This projects helped me being more confident with the details of react components, hooks and react mindset to create a responsive Note App with.

To see parts of my codes and see how you can add code snippets, see below:

```Jsx + Tailwind CSS

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

  const [isShown, setIsShown] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

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
                Cancel
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



```

### Continued development

In my future projects, not only i am going to focus on improving my knowledge of front end development (html and css), but also i will make it more dynamic and use react and typeScript so as to develop cooler projects. I will also try to be much more familiar with UI design so as to better understand my clients needs and requirements.

### Useful resources

In order to do this project in a correct way you need to have a good knowledge of html and pure css and grid and then tailwind and you need to know how to work with alpine js in the project and connect it to css if you want to use js.

- [w3schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/) - Remember that no matter how many tutorial videos you have watched, you always need to learn details and features from codes documentations
- [codeacademy](https://www.codecademy.com/)
- [udemy](https://www.udemy.com/) - Here you can find a number of tutorials in different languages
- [coursera](https://www.coursera.org/)

To my persian friends:
You can benefit from this complete article on which sources to use to master flex and grid.

## Author

- Website - My website is under construction but you can find my works here : [Elle Famkar](https://github.com/ellefamkar)
- Twitter - [@Ellefamkar](https://www.twitter.com/ellefamkar)

Feel free to ask any questions come to your mind on my github account!

## Acknowledgments

I want to thank everyone who has been inspiring and helpfull with great projects, tips and lessons.

**Have fun using this project!** 🚀
