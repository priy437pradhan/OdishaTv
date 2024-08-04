import { Link } from "react-router-dom";

const OpinionCard = ({ headline, imageSrc, category, isLast }) => {
  return (
    <div
      className={`relative pr-2 pl-32 h-24 inline-block  w-1/4 ${
        !isLast ? "border-r border-gray-300" : ""
      }`}
    >
      <Link to={`/story/${headline}`}>
        <img
          src={imageSrc}
          alt={headline}
          title={headline}
          className="w-28 h-24 absolute left-2 top-0 rounded"
        />
      </Link>
      <Link to={`/story/${headline}`}>
        <h3 className="block text-gray-800 m-1 text-sm mx-2 font-bold leading-5 max-h-15 overflow-hidden">
          {headline}
        </h3>
      </Link>
      <Link to={`/story/${headline}`}>
        <h4 className="text-sm block p-2  text-gray-700 font-medium absolute bottom-0">
          {category}
        </h4>
      </Link>
    </div>
  );
};

export default OpinionCard;
