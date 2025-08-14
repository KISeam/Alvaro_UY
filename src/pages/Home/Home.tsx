import ArticlesNews from "./components/ArticlesNews";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ExclusiveProperties from "./components/ExclusiveProperties";
import JustHome from "./components/JustHome";
import PremiumListing from "./components/PremiumListing";
import Review from "./components/Review";
import Trending from "./components/Trending";
import WorkWithUs from "./components/WorkWithUs";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <Banner />
        <div className="max-w-[1620px] mx-auto px-4">
          <Categories />
          <Trending />
          <PremiumListing />
          <ExclusiveProperties />
          <ArticlesNews />
          <WorkWithUs />
        </div>
        <Review />
        <div className="max-w-[1620px] mx-auto px-4">
          <JustHome />
        </div>
      </div>
    </>
  );
};

export default Home;
