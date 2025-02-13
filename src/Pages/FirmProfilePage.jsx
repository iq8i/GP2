import Header from "../Components/Header";
import placeHolder from "../Assets/image.png";
import Card from "../Components/Card";
import ServicesSection from "../Components/ServicesSection";
import { Link } from "react-router-dom";
function FirmProfilePage() {
  return (
    <>
      <Header />
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-[3rem] md:text-[5rem] my-5 font-montserrat">
            Firm&apos;s Profile
          </h1>
          <Link to="/FirmProfile/update">
            <button className="bg-[rgba(91,184,255,1)] text-white h-10 w-[7rem] text-[1rem] font-montserrat rounded-md">
              Edit Profile
            </button>
          </Link>
        </div>
        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row gap-5">
          <Card state="profile" />

          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            quibusdam adipisci fuga officiis incidunt at, enim ipsa itaque
            architecto ipsam explicabo perspiciatis, qui perferendis pariatur
            iusto natus unde mollitia quia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis soluta libero sint explicabo
            quas itaque quam quo nisi fugiat natus cupiditate maxime accusamus
            quisquam a error, quasi nobis? Ex, voluptate. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Nihil quibusdam adipisci fuga
            officiis incidunt at, enim ipsa itaque architecto ipsam explicabo
            perspiciatis, qui perferendis pariatur iusto natus unde mollitia
            quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            soluta libero sint explicabo quas itaque quam quo nisi fugiat natus
            cupiditate maxime accusamus quisquam a error, quasi nobis? Ex,
            voluptate.
          </p>
        </div>
      </div>
      <ServicesSection />
    </>
  );
}

export default FirmProfilePage;
