import { useEffect, useState } from "react";
import slideImg1 from "../../../assets/images/18c43a83ef76b589f9bc465e16d7b80142087bf9.jpg";
import slideImg2 from "../../../assets/images/92dfe93ebbc052fefa198c0e83ff0e85d8c41a99.jpg";
import slideImg3 from "../../../assets/images/02d899bf5e0deda1e49c71b6a4b92eb1efce0a57.jpg";
import slideImg4 from "../../../assets/images/8bc9072658ded3c598a60f17aedf95b28334f5be.jpg";
import slideImg5 from "../../../assets/images/81eb1c3d4dc08473349f6e1ff554a0ada35e9ae1.jpg";

const images = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5];

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[856px]">
      <div className="relative h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="max-w-[1620px] mx-auto h-full">
              <div className="absolute bottom-10 px-10 space-y-10">
                <h1 className="text-2xl md:text-4xl lg:text-6xl text-white max-w-2xl">
                  Discover the Art of{" "}
                  <span className="text-[#CBA65F]">Luxury Living</span>
                </h1>
                <p className="text-white md:text-xl lg:text-2xl">
                  One search • 560,000+ listings • 21,000+ trusted sellers • 120
                  countries
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
