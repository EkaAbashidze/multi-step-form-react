import { useState } from "react";
import PageNumber from "./components/PageNumber";
import Navigation from "./components/Navigation";
import UserInfo from "./components/UserInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddons from "./components/PickAddons";
import { useDispatch } from "react-redux";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import { userInfoActions } from "./store/store";
import { selectedPlanSliceActions } from "./store/store";
import { addonsSliceActions } from "./store/store";
import ProPhoto from "/images/icon-pro.svg";

function App() {
  const [activeButton, setActiveButton] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const totalPages = 4;

  console.log("state: " + selectedPlan);

  const dispatch = useDispatch();

  const handleButtonClick = (number) => {
    setActiveButton(number);
  };

  const plans = ["Basic Plan", "Standard Plan", "Premium Plan"];

  const handleNext = () => {
    if (activeButton === 1) {
      dispatch(
        userInfoActions.updateUserInfo({
          field: "name",
          value: document.querySelector('input[type="text"]').value,
        })
      );
      dispatch(
        userInfoActions.updateUserInfo({
          field: "email",
          value: document.querySelector('input[type="email"]').value,
        })
      );
      dispatch(
        userInfoActions.updateUserInfo({
          field: "phoneNumber",
          value: document.querySelector('input[type="tel"]').value,
        })
      );
    }
    if (activeButton === 2) {
      console.log("Dispatching updatePlan with selectedPlan:", selectedPlan);
      dispatch(
        selectedPlanSliceActions.updatePlan({
          field: "selectedPlan",
          value: selectedPlan,
        })
      );
    }
    if (activeButton === 3) {
      dispatch(
        addonsSliceActions.updateAddons({
          field: "addons",
          value: selectedAddons,
        })
      );

      setActiveButton(activeButton + 1);
    }
    setActiveButton(activeButton + 1);
  };

  const handlePrev = () => {
    if (activeButton > 1) {
      setActiveButton(activeButton - 1);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAddonSelect = (addons) => {
    setSelectedAddons(addons);
  };

  return (
    <>
      <div className="flex justify-center">
        <div>
          <img src={ProPhoto} alt="" />
        </div>

        <PageNumber
          number={1}
          isActive={activeButton === 1}
          onClick={() => handleButtonClick(1)}
        />
        <PageNumber
          number={2}
          isActive={activeButton === 2}
          onClick={() => handleButtonClick(2)}
        />
        <PageNumber
          number={3}
          isActive={activeButton === 3}
          onClick={() => handleButtonClick(3)}
        />
        <PageNumber
          number={4}
          isActive={activeButton === 4}
          onClick={() => handleButtonClick(4)}
        />
      </div>
      {activeButton === 1 && <UserInfo />}
      {activeButton === 2 && (
        <SelectPlan plans={plans} onPlanSelect={handlePlanSelect} />
      )}
      {activeButton === 3 && (
        <PickAddons
          selectedAddons={selectedAddons}
          onAddonSelect={handleAddonSelect}
        />
      )}
      {activeButton === 4 && <FinishingUp />}
      {activeButton !== 5 ? (
        <Navigation
          currentPage={activeButton}
          totalPages={totalPages}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      ) : (
        <ThankYou />
      )}
    </>
  );
}

export default App;
