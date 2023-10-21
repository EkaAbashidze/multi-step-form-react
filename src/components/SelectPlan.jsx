import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function SelectPlan({ plans, onPlanSelect }) {
  const chosenPlan = useSelector((state) => state.selectedPlan);

  console.log("REDUX PLAN:", chosenPlan);

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h2>Select Your Plan</h2>
      {plans.map((plan, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={plan}
              checked={chosenPlan === plan}
              onChange={() => onPlanSelect(plan)}
            />
            {plan}
          </label>
        </div>
      ))}
    </div>
  );
}

SelectPlan.propTypes = {
  plans: PropTypes.array.isRequired,
  onPlanSelect: PropTypes.func.isRequired,
};

export default SelectPlan;
