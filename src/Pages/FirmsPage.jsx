import { useEffect, useState } from "react";
import Category from "../Components/Category";
import FilterSection from "../Components/FilterSection";
import FirmCard from "../Components/FirmCard";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";
const firmFilters = [
  {
    name: "Location",
    items: ["Riyadh", "Jeddah", "Khobar", "Dammam", "Madinah", "Makkah"],
  },
  {
    name: "Services Offered",
    items: [
      "Tax Advisory",
      "Auditing",
      "Payroll Management",
      "Financial Consulting",
      "Risk Advisory",
    ],
  },
  {
    name: "Firm Size",
    items: [
      "Small (1-50 employees)",
      "Medium (51-200 employees)",
      "Large (200+ employees)",
    ],
  },
  {
    name: "Industry Specialization",
    items: ["Retail", "Manufacturing", "Technology", "Healthcare", "Finance"],
  },
  {
    name: "Rating & Reviews",
    items: ["5 Stars", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up"],
  },
];
const accountingFirms = [
  {
    id: 1,
    image:
      "data:image/png;base64,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",
    title: "Deloitte",
    description:
      "A global leader providing services in tax, risk advisory, financial guidance, auditing, and consulting.",
    path: "/FirmsPage/1",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMKiCusK0cLyrLJ9rCbxLqjF_MbZj0UEAgA&s",
    title: "PwC",
    description:
      "One of the largest professional services firms globally, offering a range of services including auditing and consulting.",
    path: "/FirmsPage/2",
  },
  {
    id: 3,
    image:
      "data:image/png;base64,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",
    title: "EY (Ernst & Young)",
    description:
      "Provides assurance, consulting, tax, and advisory services to businesses worldwide.",
    path: "/FirmsPage/3",
  },
  {
    id: 4,
    image:
      "https://seekcolors.com/wp-content/uploads/2022/01/CI.KPMGProfile.png",

    title: "KPMG",
    description:
      "A global network offering audit, tax, and advisory services to various industries.",
    path: "/FirmsPage/4",
  },
];

function FirmsPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
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
  const currentCards = accountingFirms.slice(firstCardIndex, lastCardIndex);
  const totalCards = accountingFirms.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Header />
      <div className="flex max-w-[77%] mx-auto mt-10 gap-10 flex-row flex-wrap md:flex-col ">
        <div className="w-full md:w-auto">
          <FilterSection>
            <Category categories={firmFilters} />
          </FilterSection>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          {currentCards.map((firm, index) => (
            <FirmCard
              key={index}
              {...firm}
              onClick={() => {
                console.log(firm.id);
                navigate(`/FirmProfile/${firm.id}`);
              }}
            />
          ))}
        </div>
        <div className="w-full flex justify-center md:justify-end mt-5">
          <Pagination
            pagenumbers={pageNumbers}
            setPageNumber={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default FirmsPage;
