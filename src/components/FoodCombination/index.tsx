import foodCategories from "../../../public/data/foodCategoryData";

type FoodCombinationProps = {
  searchTerm: string;
  Category: string;
};
const FoodCombination: React.FC<FoodCombinationProps> = () => {
  return (
    <div className="flex gap-10 py-5">
      <div className="w-16 h-16 bg-secondary rounded-2xl">
        <img
          src="../../../uploads/grill-chicken-spicy 1.png"
          alt="grill chicken"
        />
        <p>All</p>
      </div>
      <div className="flex justify-between gap-10">
        {foodCategories.map((foodCategory, index) => {
          return (
            <div>
              <div
                key={index}
                className="bg-light-gray rounded-2xl w-16 h-16 flex items-center justify-center"
              >
                <img
                  src={foodCategory.image}
                  alt={foodCategory.name}
                  className="h-[30px] w-[30px] rounded-full mx-2"
                />
              </div>
              <p className="font-extralight">{foodCategory.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCombination;
