const Card = (props) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
        <a href={props.link} aria-label={props.headline}>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={props.img}
            alt={props.headline || "News image"}
          />
        </a>
        <div className="p-6">
          <a href={props.link} aria-label={props.headline}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.headline}
            </h5>
          </a>
          <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <a
            href={props.link}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800"
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
      </div>
    );
  };
  
  export default Card;
  