import PropTypes from "prop-types";

function PageNumber({ number, isActive, onClick }) {
  return (
    <button
      className={`m-2 rounded-full w-[33px] h-[33px] border border-1  ${
        isActive
          ? "bg-sky-blue text-black border-sky-blue"
          : "text-white border-white"
      }`}
      onClick={onClick}
    >
      {number}
    </button>
  );
}

PageNumber.propTypes = {
  number: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PageNumber;
