import { FaCheck } from "react-icons/fa";
import buildingImg1 from "../../../assets/images/0ad78376e3683e8433eb395f9ed49fb8e87a2a07.jpg";
import buildingImg2 from "../../../assets/images/40e3ba73c9b45a0940cf3b6caf72d5c0e15bf160.jpg";
import { BsBuildings } from "react-icons/bs";

const WorkWithUs: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 w-full lg:w-auto">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="relative h-64 sm:h-80 md:h-96 w-full md:w-72 lg:w-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildingImg1}
                alt="Modern apartment building"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex justify-end -mt-8 md:mt-0">
                <div className="w-48 md:w-56 lg:w-64 rounded-2xl bg-[#CBA65F] py-5 px-4 text-white shadow-md transform transition-all hover:scale-105 hover:shadow-lg">
                  <div className="p-3 rounded-full bg-white text-[#CBA65F] w-fit text-xl shadow-sm">
                    <BsBuildings />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm md:text-base font-medium">
                      Properties For Sale
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      14k
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-[28rem] w-full md:w-64 lg:w-80 xl:w-96 rounded-xl overflow-hidden shadow-lg md:mt-16">
            <img
              src={buildingImg2}
              alt="Luxury villa"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-2/5 space-y-6 lg:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Why You Should Work <br className="hidden sm:block" /> With Us
          </h2>

          <p className="text-gray-600 text-base lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#CBA65F] rounded-full p-2 text-white flex-shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <p className="font-semibold text-gray-800">100% Secure</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#CBA65F] rounded-full p-2 text-white flex-shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <p className="font-semibold text-gray-800">Buy or Rent Homes</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#CBA65F] rounded-full p-2 text-white flex-shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <p className="font-semibold text-gray-800">
                  Wide Range of Properties
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#CBA65F] rounded-full p-2 text-white flex-shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <p className="font-semibold text-gray-800">
                  Trusted by Thousands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
