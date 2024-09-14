import dayjs from "dayjs";

const Card = (props) => {
  const date = props.publishedAt;
  const formattedDate = dayjs(date).format("DD MMM YYYY [at] HH:mm");

  return (
    <div className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform ">
      {/* Image on top for mobile, on left for larger screens */}

      <img
        className=" flex-shrink-0 sm:w-48 w-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:h-full object-cover h-48"
        src={props.img}
        alt={props.headline || "News image"}
      />

      {/* Content */}
      <div className="p-6 flex-1">
        <a href={props.link} aria-label={props.headline}>
          <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-700 dark:text-white">
            {props.headline}
          </h5>
        </a>
        <div className="text-sm text-gray-400 mb-2">
          Published on {formattedDate}
        </div>
        <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
        <a
          href={props.link}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#53c1c0] rounded-md hover:bg-[#45b2a5] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800"
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
      <div className="absolute bottom-2 right-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Source-</span>
        <a
          href={props.sourceLink}
          className="ml-1 text-[#53c1c0] hover:text-[#45b2a5] dark:text-blue-400 dark:hover:text-blue-300"
        >
          {props.sourceName}
        </a>
      </div>
    </div>
  );
};

export default Card;
