import React from "react";
import logo from "../assets/images/Frame 5.png";
import { FaArrowRight } from "react-icons/fa";
import appStoreImg from "../assets/images/Link.png";
import playStoreImg from "../assets/images/Link.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#F9F9FB]">
        <div className="max-w-[1620px] mx-auto px-10">
          <div className="pt-10 pb-12 border-b border-[#EBEBEB]">
            <img src={logo} alt="Logo Image" />
          </div>

          <div className="flex flex-wrap justify-between gap-x-20 gap-y-6 pt-14 pb-6 border-b border-[#EBEBEB]">
            {/* Subscribe */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Subscribe
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-10 pb-3 border-b border-[#CBA65F] w-fit">
                  <input
                    type="email"
                    className="border-none focus:outline-none text-[#1A1A1A]"
                    placeholder="Your e-mail"
                  />
                  <button className="text-white text-lg px-2.5 py-1 bg-[#CBA65F] rounded-md hover:bg-[#b89452] transition-colors duration-300 flex items-center gap-2">
                    Send
                    <FaArrowRight />
                  </button>
                </div>
                <p className="text-[#CBA65F] text-base">
                  Subscribe to our newsletter to receive our weekly feed.
                </p>
              </div>
            </div>

            {/* Discover */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Discover
              </h3>
              <div className="space-y-3">
                <p className="text-[#CBA65F] text-base">Miami</p>
                <p className="text-[#CBA65F] text-base">New York</p>
                <p className="text-[#CBA65F] text-base">Chicago</p>
                <p className="text-[#CBA65F] text-base">Florida</p>
                <p className="text-[#CBA65F] text-base">Los Angeles</p>
                <p className="text-[#CBA65F] text-base">San Diego</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Quick Links
              </h3>
              <div className="space-y-3">
                <p className="text-[#CBA65F] text-base">Blog</p>
                <p className="text-[#CBA65F] text-base">Pricing Plans</p>
                <p className="text-[#CBA65F] text-base">Privacy Policy</p>
                <p className="text-[#CBA65F] text-base">Terms & Conditions</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Contact Us
              </h3>
              <div className="space-y-3">
                <p className="text-[#CBA65F] text-base">hi@justhome.com</p>
                <p className="text-[#CBA65F] text-base">(123) 456-7890</p>
              </div>
            </div>

            {/* Our Address */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Our Address
              </h3>
              <div className="space-y-3">
                <p className="text-[#CBA65F] text-base">
                  99 Fifth Avenue, 3rd Floor
                </p>
                <p className="text-[#CBA65F] text-base">
                  San Francisco, CA 1980
                </p>
              </div>
            </div>

            {/* Get the app */}
            <div className="space-y-8">
              <h3 className="md:text-lg text-[#1A1A1A] font-semibold">
                Get the app
              </h3>
              <div className="space-y-5">
                <img src={appStoreImg} alt="App Store Image" />
                <img src={playStoreImg} alt="Play Store Image" />
              </div>
            </div>
          </div>

          <div className="py-10">
            <p className="text-center text-[#CBA65F] text-base">
              Copyright &copy; 2025. UXShakil
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
