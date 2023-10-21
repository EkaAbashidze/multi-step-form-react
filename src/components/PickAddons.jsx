import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function PickAddons({ selectedAddons, onAddonSelect }) {
  const reduxAddons = useSelector((state) => state.addons);

  console.log("REDUX PLAN:", reduxAddons);

  const availableAddons = [
    "Online Service",
    "Larger Storage",
    "Customizable Profile",
  ];

  const handleAddonToggle = (addon) => {
    const updatedAddons = [...selectedAddons];
    if (updatedAddons.includes(addon)) {
      updatedAddons.splice(updatedAddons.indexOf(addon), 1);
    } else {
      updatedAddons.push(addon);
    }
    onAddonSelect(updatedAddons);
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h2>Pick Add-ons</h2>
      {availableAddons.map((addon, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={selectedAddons.includes(addon)}
              onChange={() => handleAddonToggle(addon)}
            />
            {addon}
          </label>
        </div>
      ))}
    </div>
  );
}

PickAddons.propTypes = {
  selectedAddons: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddonSelect: PropTypes.func.isRequired,
};

export default PickAddons;
