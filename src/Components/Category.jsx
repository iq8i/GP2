// import arrow from "../Assets/arrow.svg";
// function Category({ props }) {
//   return (
//     <>
//       <div>
//         <span>{/* straight line*/}</span>
//         <img src={arrow} alt="" />
//         <p>Applied Filters</p>
//         <p>Clear all</p>
//         <span>all</span>
//       </div>
//       {props.categories.map((name, items) => {
//         <>
//           {" "}
//           <span>{/* straight line*/}</span>
//           <img src={arrow} alt="" />
//           <p>{name}</p>
//           {items.map((itemName) => {
//             <span>{itemName}</span>;
//           })}
//         </>;
//       })}
//     </>
//   );
// }

// export default Category;
// import arrow from "../Assets/arrow.svg";

// function Category({ categories }) {
//   return (
//     <div className="w-[30rem] mx-auto ">
//       {/* Applied Filters */}
//       <div className="flex justify-between items-center my-3">
//         <p className="font-medium">Applied Filters</p>
//         <p className="text-blue-600 cursor-pointer">Clear all</p>
//       </div>
//       <span className="block border-b border-gray-300 my-2"></span>

//       {/* Categories */}
//       {categories.map((category, index) => (
//         <div key={index} className="mt-4">
//           <div className="flex items-center justify-between cursor-pointer">
//             <p className="text-lg font-semibold">{category.name}</p>
//             <img src={arrow} alt="Arrow" className="w-4 h-4 rotate-[270deg]" />
//           </div>

//           {/* Items */}
//           <div className="mt-2 space-y-2">
//             {category.items.map((item, i) => (
//               <label key={i} className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="w-5 h-5" />
//                 <span className="text-lg">{item}</span>
//               </label>
//             ))}
//           </div>

//           <span className="block border-b border-gray-300 my-2"></span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Category;
import { useState } from "react";
import arrow from "../Assets/arrow.svg";

function Category({ categories }) {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the category
    }));
  };

  return (
    <div className="w-[24rem] ml-2">
      {/* Applied Filters */}
      <div className="flex justify-between items-center my-3">
        <p className="font-medium">Applied Filters</p>
        <p className="text-blue-600 cursor-pointer">Clear all</p>
      </div>
      <span className="block border-b border-gray-300 my-2"></span>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mt-4">
          {/* Category Header */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleCategory(index)}
          >
            <p className="text-lg font-semibold">{category.name}</p>
            <img
              src={arrow}
              alt="Arrow"
              className={`w-4 h-4 transform transition-transform duration-300 ${
                openCategories[index] ? "rotate-[270deg]" : "rotate-90"
              }`}
            />
          </div>

          {/* Items - Conditionally Rendered */}
          {openCategories[index] && (
            <div className="mt-2 space-y-2">
              {category.items.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-lg">{item}</span>
                </label>
              ))}
            </div>
          )}

          <span className="block border-b border-gray-300 my-2"></span>
        </div>
      ))}
    </div>
  );
}

export default Category;
