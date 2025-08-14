import { FaAngleRight, FaChevronLeft } from "react-icons/fa";
import buldingImg from "../../../assets/images/00b52bffaabac6a8b40251786d87f31c9c3d083c.jpg";
import homeImg from "../../../assets/images/47adad5204506f3a771ce4892c7805c4dda6629d.jpg";
import buldingImg2 from "../../../assets/images/f6aad9ae9b1a189c05815bfa54fa5eb347b1ac18.jpg";
import { CiPlay1 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCheckboxBlankLine, RiHotelBedLine } from "react-icons/ri";
import { PiBathtub } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const ExclusiveProperties: React.FC = () => {
  return (
    <div className="py-8 md:py-12 max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-10">
      <h1 className="text-[#CBA65F] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-medium">
        Exclusive Properties
      </h1>

      <div className="py-8 md:py-12 flex flex-col lg:flex-row gap-5 md:gap-7">
        <div className="rounded-2xl relative overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[715px] w-full lg:w-1/2">
          <img
            src={buldingImg}
            alt="Bulding Image"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

          <div className="absolute top-5 sm:top-10 left-5 sm:left-10">
            <button className="text-white bg-[#CBA65F] rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm uppercase font-semibold">
              For Sale
            </button>
          </div>

          <div className="absolute bottom-20 sm:bottom-28 left-5 sm:left-10 text-white z-10">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Villa One Hyde Park
            </h2>
          </div>

          <div className="absolute bottom-14 sm:bottom-20 left-5 sm:left-10 text-white z-10">
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <IoLocationOutline />
              <p>2050 Bloomingdale Ave</p>
            </div>
          </div>

          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 text-white z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-14">
              <p className="text-white font-semibold text-base sm:text-lg lg:text-xl">
                $120,000
              </p>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <RiHotelBedLine />
                  <p>4</p>|
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <PiBathtub />
                  <p>2</p>|
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <RiCheckboxBlankLine />
                  <p>350</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-5 md:gap-7">
          <div className="rounded-2xl relative overflow-hidden h-[250px] sm:h-[300px] md:h-[341.67px]">
            <img
              src={homeImg}
              alt="Home Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-2.5 transform -translate-y-1/2">
              <button className="bg-[#1A1A1A33] p-3 sm:px-7 sm:py-4 rounded-full text-white cursor-pointer">
                <FaChevronLeft />
              </button>
            </div>
            <div className="absolute top-1/2 right-2.5 transform -translate-y-1/2">
              <button className="bg-[#1A1A1A33] p-3 sm:px-7 sm:py-4 rounded-full text-white cursor-pointer">
                <FaAngleRight />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 md:gap-7">
            <div className="w-full sm:w-1/2 md:h-[250px] lg:h-[340px] rounded-2xl overflow-hidden relative">
              <img
                src={buldingImg2}
                alt="Bulding Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#141414] rounded-full p-4 sm:px-6 sm:py-6 text-white">
                  <CiPlay1 className="text-xl sm:text-2xl" />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:h-[250px] lg:h-[340px] rounded-2xl bg-[#CBA65F] p-5 sm:p-8 md:p-10 text-white">
              <div className="space-y-1 sm:space-y-2 pb-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">280+</h1>
                <p className="text-sm sm:text-base">Properties</p>
              </div>
              <p className="text-sm sm:text-base">
                Explore our wide variety of properties to find your dream home
                today
              </p>
              <div className="flex justify-end items-end pt-6">
                <button className="bg-white rounded-full p-3 sm:px-5 sm:py-4 text-lg sm:text-2xl text-black">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProperties;
