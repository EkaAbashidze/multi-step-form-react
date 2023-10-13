import PropTypes from "prop-types";

function SelectPlan({ selectedPlan, onPlanSelect }) {
  const plans = ["Basic Plan", "Standard Plan", "Premium Plan"];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Select Your Plan</h2>
      {plans.map((plan, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={plan}
              checked={selectedPlan === plan}
              onChange={() => onPlanSelect(plan)}
            />{" "}
            {plan}
          </label>
        </div>
      ))}
    </div>
  );
}

SelectPlan.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  onPlanSelect: PropTypes.func.isRequired,
};

export default SelectPlan;
