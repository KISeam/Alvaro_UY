import React from "react";
import realEstateImg from "../../../assets/images/ed5915f16a7bf8effd036e79b0fd1f114db18914.jpg";
import bradImg from "../../../assets/images/7f031c0ff201b3f60cbb54ed4d77c0419c1138b8.jpg";
import jewelleryImg from "../../../assets/images/5e3f7559f1d2a13e32475a2daa6a086505e624d4.jpg";
import watchImg from "../../../assets/images/425fa9cfc2fd6ebf92503db93cffde449a8d9eed.jpg";
import { FaRegHeart } from "react-icons/fa";

const trendingData = [
  {
    title: "Real Estate",
    image: realEstateImg,
    listings: "532,795 Listings",
  },
  {
    title: "Brands",
    image: bradImg,
    listings: "120,231 Listings",
  },
  {
    title: "Jewellery",
    image: jewelleryImg,
    listings: "76,412 Listings",
  },
  {
    title: "Watches",
    image: watchImg,
    listings: "89,543 Listings",
  },
  {
    title: "Real Estate",
    image: realEstateImg,
    listings: "532,795 Listings",
  },
  {
    title: "Brands",
    image: bradImg,
    listings: "120,231 Listings",
  },
  {
    title: "Jewellery",
    image: jewelleryImg,
    listings: "76,412 Listings",
  },
  {
    title: "Watches",
    image: watchImg,
    listings: "89,543 Listings",
  },
];

const Trending: React.FC = () => {
  return (
    <div className="py-12 space-y-7">
      <h1 className="text-[#CBA65F] text-xl md:text-2xl lg:text-5xl">
        Trending
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingData.map((item, index) => (
          <div
            key={index}
            className="rounded-md relative h-[366.48px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={`${item.title} Image`}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-3 left-3">
              <button className="bg-[#45454566] rounded-lg px-5 py-2.5 text-white cursor-pointer">
                View More
              </button>
            </div>

            <div className="absolute top-5 right-5">
              <FaRegHeart className="text-white text-xl cursor-pointer" />
            </div>

            <div className="absolute bottom-3 left-5 text-white space-y-1">
              <h3 className="font-semibold text-lg md:text-2xl">
                {item.title}
              </h3>
              <p className="md:text-xl">{item.listings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
