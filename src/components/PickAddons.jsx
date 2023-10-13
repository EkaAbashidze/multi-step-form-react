import PropTypes from "prop-types";

function PickAddons({ selectedAddons, onAddonSelect }) {
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
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
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
