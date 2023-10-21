import { useSelector } from "react-redux";

function FinishingUp() {
  const user = useSelector((state) => state.userInfo);
  const selectedPlan = useSelector((state) => state.selectedPlan);
  const addons = useSelector((state) => state.addons);

  console.log("REDUX PLAN:", user);

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h2>Finishing Up</h2>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.phoneNumber}</h2>
      <h2>{selectedPlan}</h2>
      {addons.map((addon, index) => {
        return <li key={index}>{addon}</li>;
      })}
    </div>
  );
}

export default FinishingUp;
