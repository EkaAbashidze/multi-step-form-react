import { useSelector } from "react-redux";

function ThankYou() {
  const state = useSelector((state) => state);

  console.log("REDUX PLAN:", state);

  return <div className="bg-white p-2 rounded-lg shadow-md">Thank you!</div>;
}

export default ThankYou;
