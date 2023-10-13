import PropTypes from "prop-types";

function Navigation({ currentPage, onNext, onPrev }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white flex justify-between items-center">
      {currentPage > 1 && (
        <button className="text-grey p-2 rounded" onClick={onPrev}>
          Go Back
        </button>
      )}
      {currentPage === 4 ? (
        <button
          className={`w-[97px] h-[40px] ${
            currentPage === 1 ? "ml-auto" : ""
          } bg-light-blue text-white p-2 rounded`}
          onClick={onNext}
        >
          Confirm
        </button>
      ) : (
        <button
          className={`w-[97px] h-[40px] ${
            currentPage === 1 ? "ml-auto" : ""
          } bg-denim text-white p-2 rounded`}
          onClick={onNext}
        >
          Next Step
        </button>
      )}
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Navigation;
