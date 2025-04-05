import React from "react";

function Navbar({ productsLength }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App using Tailwind and React
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">
        {productsLength ? productsLength : "0"}
      </span>
    </div>
  );
}

export default Navbar;
