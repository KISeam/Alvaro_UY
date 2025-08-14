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
    <>
      <div className="py-12 max-w-[1430px] mx-auto px-10">
        <h1 className="text-[#CBA65F] text-xl md:text-2xl lg:text-5xl text-center">
          Exclusive Properties
        </h1>
        <div className="py-12 flex flex-col md:flex-row gap-7">
          <div className="rounded-2xl relative overflow-hidden h-[715px] md:w-1/2">
            <img
              src={buldingImg}
              alt="Bulding Image"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

            <div className="absolute top-10 left-10">
              <button className="text-white bg-[#CBA65F] rounded-full px-3.5 py-1.5 uppercase font-semibold">
                For Sale
              </button>
            </div>

            <div className="absolute bottom-28 left-10 text-white z-10">
              <h2 className="text-2xl font-semibold">Villa One Hyde Park</h2>
            </div>

            <div className="absolute bottom-20 left-10 text-white z-10">
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <p>2050 Bloomingdale Ave</p>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 text-white z-10">
              <div className="flex items-center gap-14">
                <p className="text-white font-semibold text-lg lg:text-xl">
                  $120,000
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <RiHotelBedLine />
                    <p>4</p>|
                  </div>
                  <div className="flex items-center gap-2">
                    <PiBathtub />
                    <p>2</p>|
                  </div>
                  <div className="flex items-center gap-2">
                    <RiCheckboxBlankLine />
                    <p>350</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl relative overflow-hidden h-[341.67px]">
              <img
                src={homeImg}
                alt="Home Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-36 left-2.5">
                <button className="bg-[#1A1A1A33] px-7 py-4 rounded-full text-white cursor-pointer">
                  <FaChevronLeft />
                </button>
              </div>
              <div className="absolute top-36 right-2.5">
                <button className="bg-[#1A1A1A33] px-7 py-4 rounded-full text-white cursor-pointer">
                  <FaAngleRight />
                </button>
              </div>
            </div>
            <div className="flex gap-7 pt-7">
              <div className="md:w-1/2 h-[340px] rounded-2xl overflow-hidden relative">
                <img
                  src={buldingImg2}
                  alt="Bulding Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-32 left-32">
                  <div className="bg-[#141414] rounded-full px-6 py-6 text-white">
                    <CiPlay1 className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 h-[340px] rounded-2xl bg-[#CBA65F] p-10 text-white">
                <div className="space-y-2 pb-5">
                  <h1 className="text-xl md:text-2xl lg:text-4xl">280+</h1>
                  <p>Properties</p>
                </div>
                <p>
                  Explore our wide variety of properties to fid your dream home
                  today
                </p>
                <div className="flex justify-end items-end pt-10">
                  <button className="bg-white rounded-full px-5 py-4.5 text-2xl text-black">
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveProperties;
