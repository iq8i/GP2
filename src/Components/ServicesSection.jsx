// import { useState } from "react";
// import Card from "./Card";
// import Category from "./Category";
// import FilterSection from "./FilterSection";
// import Pagination from "./Pagination";
// const fakeProducts = [
//   { id: 1, name: "Apple AirPods", price: 95.0, inStock: true },
//   { id: 2, name: "Samsung Galaxy Buds", price: 85.0, inStock: false },
//   { id: 3, name: "Sony WH-1000XM4", price: 299.99, inStock: true },
//   { id: 4, name: "Bose QuietComfort 45", price: 329.99, inStock: false },
//   { id: 5, name: "JBL Tune 760NC", price: 129.99, inStock: true },
// ];

// const fakeData = [
//   {
//     name: "Category",
//     items: ["All", "price", "rating", "favorited"],
//   },
//   {
//     name: "Stock Status",
//     items: ["In Stock", "Out of Stock"],
//   },
// ];

// function ServicesSection() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 4; // Number of products per page

//   const lastCardIndex = currentPage * cardsPerPage;
//   const firstCardIndex = lastCardIndex - cardsPerPage;
//   const currentCards = fakeProducts.slice(firstCardIndex, lastCardIndex);
//   const totalCards = fakeProducts.length;

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <>
//       <div className="max-w-[78rem] mx-auto">
//         <div className="flex flex-row   mt-5 gap-5">
//           <FilterSection>
//             <Category categories={fakeData} />
//           </FilterSection>
//           <div className="grid grid-cols-2 gap-10 p-0">
//             {currentCards.map((product) => (
//               <Card key={product.id} state="product" product={product} />
//             ))}
//           </div>
//         </div>

//         <div className="w-full flex justify-end">
//           <Pagination
//             pagenumbers={pageNumbers}
//             setPageNumber={setCurrentPage}
//             currentPage={currentPage}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default ServicesSection;
import { useState, useEffect } from "react";
import Card from "./Card";
import Category from "./Category";
import FilterSection from "./FilterSection";
import Pagination from "./Pagination";
import AddService from "./AddService";

const fakeProducts = [
  { id: 1, name: "Apple AirPods", price: 95.0, inStock: true },
  { id: 2, name: "Samsung Galaxy Buds", price: 85.0, inStock: false },
  { id: 3, name: "Sony WH-1000XM4", price: 299.99, inStock: true },
  { id: 4, name: "Bose QuietComfort 45", price: 329.99, inStock: false },
  { id: 5, name: "JBL Tune 760NC", price: 129.99, inStock: true },
];

const fakeData = [
  {
    name: "Category",
    items: ["All", "Price", "Rating", "Favorited"],
  },
  {
    name: "Stock Status",
    items: ["In Stock", "Out of Stock"],
  },
];

function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // Dynamically set the number of cards per page based on screen width
  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 768 ? 3 : 4); // 3 for mobile, 4 for larger screens
    };

    updateCardsPerPage(); // Set initial value
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = fakeProducts.slice(firstCardIndex, lastCardIndex);
  const totalCards = fakeProducts.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-[78rem] mx-auto ">
      {/* Main Layout */}
      <div className="flex flex-col justify-center  md:flex-row gap-5 mt-5">
        {/* Sidebar (Filters) */}
        <div className="w-full md:w-1/3">
          <FilterSection>
            <Category categories={fakeData} />
            <button
              className="bg-[rgba(91,184,255,1)] text-[2rem] font-montserrat text-[white] mt-4 rounded-md"
              onClick={toggleModal}
            >
              Add Service
            </button>
            {isOpen && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white rounded-lg px-6 pb-6 max-w-lg w-full">
                  {/* Close Button */}
                  <button
                    onClick={toggleModal}
                    className="absolute top-2 right-8 text-2xl text-gray-500 hover:text-gray-700"
                  >
                    &times; {/* This is the X symbol */}
                  </button>

                  <AddService />
                </div>
              </div>
            )}
          </FilterSection>
        </div>

        {/* Cards Section */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCards.map((product) => (
              <Card key={product.id} state="product" product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination - Left aligned on desktop, centered on mobile */}
      <div className="w-full flex justify-center md:justify-end mt-5">
        <Pagination
          pagenumbers={pageNumbers}
          setPageNumber={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ServicesSection;
