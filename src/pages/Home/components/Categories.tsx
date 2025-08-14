import homeIcon from "../../../assets/images/Icon.png";
import carIcon from "../../../assets/images/Vector.png";
import shipIcon from "../../../assets/images/_x36_4_Cruise_Ship.png";
import watchIcon from "../../../assets/images/Group.png";
import jewelleryIcon from "../../../assets/images/Group (1).png";

interface CategoryItemProps {
  icon: string;
  title: string;
  description: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="border border-[#D5D5D5] rounded-2xl h-[310px] flex items-center justify-center">
    <div className="space-y-6 flex flex-col items-center">
      <img src={icon} alt={`${title} Icon`} />
      <div className="space-y-1 text-center">
        <h3 className="text-[#CBA65F] text-xl font-semibold">{title}</h3>
        <p className="text-[#CBA65F]">{description}</p>
      </div>
    </div>
  </div>
);

const Categories: React.FC = () => {
  const categories = [
    { icon: homeIcon, title: "Real Estate", description: "532,795 Listings" },
    { icon: carIcon, title: "Car", description: "10+ Brads" },
    { icon: shipIcon, title: "Yacht", description: "10+ Brads" },
    { icon: watchIcon, title: "Watch", description: "10+ Brads" },
    { icon: jewelleryIcon, title: "Jewellery", description: "3K+ Design" },
  ];

  return (
    <div className="py-24 space-y-7">
      <h1 className="text-[#CBA65F] text-xl md:text-2xl lg:text-5xl">
        Featured Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
