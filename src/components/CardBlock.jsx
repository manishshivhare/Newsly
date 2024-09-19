import dayjs from "dayjs";
import { useState, useEffect } from "react";
import defaultImage from "../assets/defaultImage.jpg";
import { checkImageURL } from "../utils/checkImageUrl";

const Card = (props) => {
  const date = props.publishedAt;
  const formattedDate = dayjs(date).format("DD MMM YYYY [at] HH:mm");

  const [imageURL, setImageURL] = useState(defaultImage);

  const truncateText = (text, maxWords) => {
    if (!text) return "No description available";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "…";
  };

  useEffect(() => {
    checkImageURL(props.img).then((isValid) => {
      setImageURL(isValid ? props.img : defaultImage);
    });
  }, [props.img]);

  return (
    <div className="relative flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform max-w-full lg:max-w-4xl mx-auto">
      <a href={props.link} className="flex-shrink-0 lg:w-64 w-full">
        <img
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none w-full lg:h-full object-cover h-64"
          src={imageURL}
          alt={props.headline || "No headline available"}
        />
      </a>

      <div className="p-4 lg:p-6 flex-1">
        <a href={props.link} aria-label={props.headline}>
          <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            {props.headline || "No headline available"}
          </h5>
        </a>
        <div className="text-xs lg:text-sm text-gray-400 mb-2">
          Published on {formattedDate}
        </div>

        <p className="mb-4 text-sm lg:text-base leading-relaxed text-gray-700 dark:text-gray-400">
          {truncateText(props.description, 60)}
        </p>
        <a
          href={props.link}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#53c1c0] rounded-md hover:bg-[#45b2a5] focus:outline-none dark:hover:bg-[#dd3b3d] dark:bg-[#c0474a] "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-2 right-2 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
        <span>Source - </span>
        <a
          href={props.sourceLink}
          className="ml-1 text-[#53c1c0] hover:text-[#45b2a5] dark:text-[#c0474a] dark:hover:text-[#f04144]"
        >
          {props.sourceName || "Unknown"}
        </a>
      </div>
    </div>
  );
};

export default Card;
