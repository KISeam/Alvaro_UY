import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ExclusiveProperties from "./components/ExclusiveProperties";
import PremiumListing from "./components/PremiumListing";
import Trending from "./components/Trending";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <Banner />
        <div className="max-w-[1620px] mx-auto px-10">
          <Categories />
          <Trending />
          <PremiumListing />
          <ExclusiveProperties />
        </div>
      </div>
    </>
  );
};

export default Home;
