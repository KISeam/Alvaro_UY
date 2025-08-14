import { FaArrowRight } from "react-icons/fa";
import buildingImg from "../../../assets/images/6a464bcb8a4fe013fef213edf5a7c73588ac44d5.png";
import homeImg from "../../../assets/images/7f72da9c199884276ee523c8e8b270c7216400f7.png";

const JustHome: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="bg-[#F9F9F9] py-16 px-10 rounded-2xl">
            <div className="space-y-5">
              <h1 className="text-[#1A1A1A] text-xl md:text-2xl">
                Looking for the new home?
              </h1>
              <div className="flex justify-between">
                <div className="space-y-5">
                  <p className="leading-[31px]">
                    10 new offers every day. 350 offers on site, trusted by a
                    community of thousands of users.
                  </p>
                  <button className="flex items-center gap-4 bg-[#CBA65F] py-5 px-8 text-white rounded-2xl cursor-pointer">
                    <p className="font-semibold">Get Started</p>
                    <FaArrowRight />
                  </button>
                </div>
                <div>
                  <img src={buildingImg} alt="Building Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F9] py-16 px-10 rounded-2xl">
            <div className="space-y-5">
              <h1 className="text-[#1A1A1A] text-xl md:text-2xl">
                Looking for the new home?
              </h1>
              <div className="flex justify-between">
                <div className="space-y-5">
                  <p className="leading-[31px]">
                    10 new offers every day. 350 offers on site, trusted by a
                    community of thousands of users.
                  </p>
                  <button className="flex items-center gap-4 bg-[#CBA65F] py-5 px-8 text-white rounded-2xl cursor-pointer">
                    <p className="font-semibold">Get Started</p>
                    <FaArrowRight />
                  </button>
                </div>
                <div>
                  <img src={homeImg} alt="Home Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JustHome;
