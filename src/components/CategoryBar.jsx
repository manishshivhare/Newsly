import { newsCategories } from "../utils/Data";

const CategoryBar = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap border-b dark:border-gray-700">
      <div className="inline-flex space-x-4 ">
        {newsCategories.map((cat, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm cursor-pointer hover:text-black dark:hover:text-white dark:text-gray-300"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
