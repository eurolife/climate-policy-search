import PropTypes, { number } from 'prop-types';

const Pagination = ({
  pageNumber,
  pageCount,
  onChange,
  maxNeighbourDistance,
  compact,
}) => {
  const renderPlaceholder = (page) => {
    return (
      <span
        key={page}
        className=""
      >
        ...
      </span>
    );
  };
  const renderPageButton = (page) => {
    let cssClasses = 'mx-1 border border-grey rounded px-1 cursor-pointer transition duration-300 hover:bg-lightgrey';
    if(page === pageNumber) {
      cssClasses += ' bg-blue text-white border-blue pointer-events-none';
    }
    return (
      <button
        key={page}
        value={page}
        type="button"
        className={cssClasses}
        onClick={() => {
          onChange(page);
        }}
      >
        {page}
      </button>
    );
  };

  return (
    <div className="pagination w-full flex justify-center mt-8">
      {new Array(pageCount).fill(0).map((item, itemIndex) => {
        const page = itemIndex + 1;
        if (
          page === 1 ||
          page === pageCount ||
          (page >= pageNumber - maxNeighbourDistance &&
            page <= pageNumber + maxNeighbourDistance)
        ) {
          return renderPageButton(page);
        }
        if (page === 2 || page === pageCount - 1) {
          return renderPlaceholder(page);
        }
      })}
    </div>
  );
};
Pagination.propTypes = {
  pageCount: PropTypes.number,
  maxNeighbourDistance: number,
  onChange: PropTypes.func,
  compact: PropTypes.bool,
};
Pagination.defaultProps = {
  pageCount: 1,
  maxNeighbourDistance: 3,
  onChange: () => {},
  compact: false,
};
export default Pagination;
