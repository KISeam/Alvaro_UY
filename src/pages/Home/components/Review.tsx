import { GoStarFill } from "react-icons/go";
import userImg from "../../../assets/images/8c261193ec6c45e5aa1db3f1734ca2c85b5706b8.png";
import reviewGroupImg from "../../../assets/images/Review Group.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review: React.FC = () => {
  return (
    <>
      <div className="bg-[#CBA65F] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1620px] mx-auto px-4">
          <div className="flex justify-between gap-12">
            <div className="max-w-md text-white">
              <h1 className="text-xl md:text-2xl lg:text-4xl leading-[52px]">
                What our customers are saying us?
              </h1>
              <p className="text-sm leading-[30px]">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like.
              </p>
              <div className="mt-6 flex gap-8">
                <div className="space-y-2.5">
                  <h2 className="text-lg md:text-2xl">10m+</h2>
                  <p>Happy People</p>
                </div>
                <div className="space-y-2.5">
                  <h2 className="text-lg md:text-2xl">4.88</h2>
                  <p>Overall rating</p>
                  <div className="flex items-center gap-2">
                    <GoStarFill className="text-[#E7C873] text-sm" />
                    <GoStarFill className="text-[#E7C873] text-sm" />
                    <GoStarFill className="text-[#E7C873] text-sm" />
                    <GoStarFill className="text-[#E7C873] text-sm" />
                    <GoStarFill className="text-[#E7C873] text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md text-white">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div>
                      <img
                        src={userImg}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <h2 className="text-lg">Cameron Williamson</h2>
                      <h3>Designer</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={reviewGroupImg}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p>
                  Searches for multiplexes, property comparisons, and the loan
                  estimator. Works great. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dores.
                </p>
                <div className="flex items-center gap-6">
                  <div className="border border-white rounded-2xl py-3 px-6 text-white cursor-pointer">
                    <FaChevronLeft />
                  </div>
                  <div className="border border-white rounded-2xl py-3 px-6 text-white cursor-pointer">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
