import { newsCategories } from "../utils/Data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CategoryBar = () => {
  return (
    <div className="relative px-10 ">
      <div className="absolute left-5 bg-white-to-transparent-r dark:bg-dark-to-transparent-r top-1/2 transform -translate-y-1/2 flex items-center w-20 h-8 cursor-pointer justify-start">
        <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
      </div>

      <ul className="flex gap-5 p-3 overflow-x-scroll no-scrollbar">
        {newsCategories.map((category, index) => (
          <li
            className="inline-block  rounded-md px-2 py-1 dark:bg-gray-800 text-sm bg-[#EDEDED] font-semibold hover:bg-[#DFDFDF] cursor-pointer transition-all"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="absolute right-5 bg-white-to-transparent-l dark:bg-dark-to-transparent-l top-1/2 transform -translate-y-1/2 flex items-center w-20 h-8 cursor-pointer justify-end">
        <MdOutlineKeyboardArrowRight className="w-6 h-6" />
      </div>
    </div>
  );
};

export default CategoryBar;
