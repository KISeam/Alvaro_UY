import { FaArrowRightLong } from "react-icons/fa6";
import realEstateImg from "../../../assets/images/ed5915f16a7bf8effd036e79b0fd1f114db18914.jpg";

const ArticlesNews: React.FC = () => {
  return (
    <>
      <div className="py-12 space-y-7">
        <h1 className="text-[#CBA65F] text-xl md:text-2xl lg:text-5xl">
          Recent Articles & News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden lg:h-[496px]">
              <img
                src={realEstateImg}
                alt="Real estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3.5 left-3.5">
                <div className="flex items-center gap-2.5 bg-white px-4 py-5 text-[#CBA65F] rounded-xl cursor-pointer">
                  <p className="md:text-lg">Read More</p>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#CBA65F] md:text-xl">Apartment</p>
              <p className="text-[#3D3E3F] md:text-xl">March 19, 2024</p>
            </div>
            <h3 className="text-[#323232] text-lg md:text-2xl">
              Housing Markets That Changed the Most This Week
            </h3>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden lg:h-[496px]">
              <img
                src={realEstateImg}
                alt="Real estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3.5 left-3.5">
                <div className="flex items-center gap-2.5 bg-white px-4 py-5 text-[#CBA65F] rounded-xl cursor-pointer">
                  <p className="md:text-lg">Read More</p>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#CBA65F] md:text-xl">Villa</p>
              <p className="text-[#3D3E3F] md:text-xl">March 15, 2024</p>
            </div>
            <h3 className="text-[#323232] text-lg md:text-2xl">
              Top 10 Modern Architecture Designs for Your Home
            </h3>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden lg:h-[496px]">
              <img
                src={realEstateImg}
                alt="Real estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3.5 left-3.5">
                <div className="flex items-center gap-2.5 bg-white px-4 py-5 text-[#CBA65F] rounded-xl cursor-pointer">
                  <p className="md:text-lg">Read More</p>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#CBA65F] md:text-xl">Commercial</p>
              <p className="text-[#3D3E3F] md:text-xl">March 10, 2024</p>
            </div>
            <h3 className="text-[#323232] text-lg md:text-2xl">
              Commercial Real Estate Trends in 2024
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesNews;
